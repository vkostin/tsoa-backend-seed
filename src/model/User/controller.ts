import {
    Body,
    Controller,
    Delete,
    Get,
    Path,
    Post,
    Put,
    Query,
    Route,
    SuccessResponse,
    Tags,
} from "tsoa";
import {User} from "./model";
import {UsersService, UserCreationParams, UserUpdateParams} from "./service";

@Route("users")
@Tags("user")
export class UsersController extends Controller {
    @Get("{userId}")
    public async getUser(
        @Path() userId: string,
        //   @Query() name?: string
    ): Promise<User> {
        return new UsersService().get(userId);
    }

    @Get()
    public async getUserList(
        @Query() offset?: number,
        @Query() limit?: number
    ): Promise<User[]> {
        if (offset == null) offset = 0;
        if (limit == null) limit = 100;
        return new UsersService().getSome(offset, limit);
    }

    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public async createUser(
        @Body() requestBody: UserCreationParams
    ): Promise<void> {
        this.setStatus(201);
        new UsersService().create(requestBody);
        return;
    }

    @SuccessResponse("200", "Ok") // Custom success response
    @Put("{userId}")
    public async updateUser(
        @Path() userId: string,
        @Body() requestBody: UserUpdateParams
    ): Promise<void> {
        this.setStatus(201);
        new UsersService().update(userId, requestBody);
        return;
    }

    @SuccessResponse("204", "No Content") // Custom success response
    @Delete("{userId}")
    public async deleteUser(
        @Path() userId: string
    ): Promise<void> {
        this.setStatus(204);
        new UsersService().delete(userId);
        return;
    }

}
