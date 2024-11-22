import {
  HydratedDocument,
  model,
  Model,
  QueryWithHelpers,
  Schema,
} from "mongoose";
import {
  Project,
  ProjectModelType,
  ProjectQueryHelpers,
} from "./test.interface";

const ProjectSchema = new Schema<
  Project,
  Model<Project, ProjectQueryHelpers>,
  Record<string, never>,
  ProjectQueryHelpers
>({
  name: String,
  stars: Number,
});

ProjectSchema.query.byName = function byName(
  this: QueryWithHelpers<any, HydratedDocument<Project>, ProjectQueryHelpers>,
  name: string
) {
  return this.find({ name: name });
};

// 2nd param to `model()` is the Model class to return.
export const ProjectModel = model<Project, ProjectModelType>(
  "Project",
  ProjectSchema
);
