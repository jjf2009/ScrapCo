import prisma from "../prismaClient.js";

export const createItem = async (req, res) => {
  try {
    const { 
      user_id, 
      dealer_id, 
      telegram_id, 
      seller_name, 
      seller_phone, 
      pictures, 
      description, 
      quantity, 
      listPlat, 
      material, 
      pickUpAddress, 
      pickUpTime, 
      price, 
      status 
    } = req.body;

    // Validate required fields
    if (!seller_name || !seller_phone || !Array.isArray(pictures) || pictures.length === 0 || 
        !description || !quantity || !listPlat || !material || !pickUpAddress || !pickUpTime || !price) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    // Validate quantity
    const parsedQuantity = parseFloat(quantity);
    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      return res.status(400).json({ message: "Quantity must be a valid positive number." });
    }

    // Validate price
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      return res.status(400).json({ message: "Price must be a valid positive number." });
    }

    // Validate enums
    const allowedListPlatforms = ["TELEGRAM", "WEBSITE"];
    const allowedMaterials = ["IRON", "PLASTIC", "PAPER", "GLASS"];
    const allowedStatuses = ["PENDING", "COMPLETED", "CANCELLED"];

    if (!allowedListPlatforms.includes(listPlat.toUpperCase())) {
      return res.status(400).json({ message: `Invalid listPlat. Allowed values: ${allowedListPlatforms.join(", ")}` });
    }

    if (!allowedMaterials.includes(material.toUpperCase())) {
      return res.status(400).json({ message: `Invalid material. Allowed values: ${allowedMaterials.join(", ")}` });
    }

    if (status && !allowedStatuses.includes(status.toUpperCase())) {
      return res.status(400).json({ message: `Invalid status. Allowed values: ${allowedStatuses.join(", ")}` });
    }

    // Create the item
    const item = await prisma.item.create({
      data: {
        user_id,
        dealer_id,
        telegram_id,
        seller_name,
        seller_phone,
        pictures: { set: pictures }, // Ensure correct array storage
        description,
        quantity: parsedQuantity,
        listPlat: listPlat.toUpperCase(),
        material: material.toUpperCase(),
        pickUpAddress,
        pickUpTime: pickUpTime.toString(), // Ensure it's stored as a string
        price: parsedPrice,
        status: status ? status.toUpperCase() : "PENDING"
      }
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: "Failed to create item", error: error.message });
  }
};


// Get all items
export const getAllItems = async (req, res) => {
  try {
    const rawItems = await prisma.$queryRaw`SELECT * FROM "Item"`;
    res.json(rawItems);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch items", error: error.message });
  }
};


// Get a single item by ID
export const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await prisma.item.findUnique({ where: { itemId: id } });

    if (!item) return res.status(404).json({ message: "Item not found" });

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch item", error: error.message });
  }
};

// Update an item
export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { pictures, description, quantity, material, pickUpAddress, pickUpTime, status, dealer_id } = req.body;

    const updatedItem = await prisma.item.update({
      where: { itemId: id },
      data: {
        pictures,
        description,
        quantity,
        material,
        pickUpAddress,
        pickUpTime,
        status,
        dealer_id
      }
    });

    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Failed to update item", error: error.message });
  }
};

// Delete an item
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.item.delete({ where: { itemId: id } });

    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete item", error: error.message });
  }
};
