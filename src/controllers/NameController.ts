import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { Name } from "../entities/Name";

class NameController {
  async create(req: Request, res: Response) {
    const { name } = req.params;
    let register = await AppDataSource.manager.findOneBy(Name, { name });
    if (register) {
      register.count++;
      await AppDataSource.manager.save(Name, register);
    } else {
      register = await AppDataSource.manager.save(Name, { name });
    }
    res.send(register);
  }

  async remove(req: Request, res: Response) {
    const { name } = req.params;
    const { affected: count } = await AppDataSource.manager.delete( Name, {name});
    return res.json({ count });
  }

  async list(_: Request, res: Response): Promise<Response> {
    const response = await AppDataSource.manager.find(Name, {
      order: {
        name: "ASC",
      },
    });
    return res.json(response);
  }
}

export default new NameController();
