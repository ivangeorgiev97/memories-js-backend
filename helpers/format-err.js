import { UserInputError } from "apollo-server";

export const formatErr = (err) => {
    if (err.message.startsWith('Database Error: ')) {
      return new Error('Internal error');
    }
    if(err.originalError instanceof UserInputError) {
        delete err.extensions.exception
    }
    return err;
}
