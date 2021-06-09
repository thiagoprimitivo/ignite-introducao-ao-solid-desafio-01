import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;

    try {
      const user = this.showUserProfileUseCase.execute({ user_id });

      return response.status(201).send({ user });
    } catch (error) {
      return response.status(404).send({ error: error.message });
    }
  }
}

export { ShowUserProfileController };
