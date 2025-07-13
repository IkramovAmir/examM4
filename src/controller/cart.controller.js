import fs from "fs/promises"
import path from "path";

export default {
    async ADDED(req, res) {
        let newProduct = req.body;
        let products = await fs.readFile(path.join(process.cwd(), "db", "products.json"), "utf-8");
        products = JSON.parse(products)
        let orders = await fs.readFile(path.join(process.cwd(), "db", "order.json"), "utf-8");
        orders = JSON.parse(orders)
        let orderL = orders.length;

        if (newProduct.isAdd == "Add") {
            orders = orders.filter(order => order.id != newProduct.id);
            orderL = orders.length;
            await fs.writeFile(path.join(process.cwd(), "db", "order.json"), JSON.stringify(orders, null, 4));
            return res.json({message: true, orderL});
        };
        for (let p of products) {
                if (p.id == newProduct.id) {
                    if (orders.some(order => order.id == p.id)) return res.json({message: true, orderL});
                    orders.push(p);
                };
        };
        orderL = orders.length;
        await fs.writeFile(path.join(process.cwd(), "db", "order.json"), JSON.stringify(orders, null, 4));
        return res.json({ message: true, orderL});
    }
}