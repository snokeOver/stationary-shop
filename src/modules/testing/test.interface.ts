import { HydratedDocument, Model, QueryWithHelpers } from "mongoose";

export interface Project {
  name?: string;
  stars?: number;
}

export interface ProjectQueryHelpers {
  byName(
    name: string
  ): QueryWithHelpers<
    HydratedDocument<Project>[],
    HydratedDocument<Project>,
    ProjectQueryHelpers
  >;
}

export type ProjectModelType = Model<Project, ProjectQueryHelpers>;
