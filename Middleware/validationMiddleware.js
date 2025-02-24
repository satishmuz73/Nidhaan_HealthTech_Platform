exports.validateMedicine = (req, res, next) => {
    const { name, price, stock } = req.body;
    if (!name || !price || !stock) {
        return res.status(400).json({ error: 'Name, price, and stock are required' });
    }
    next();
};
