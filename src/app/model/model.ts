export interface SessionDTO {
  date: Date;
  description: String;
  exercises: ExerciseDTO[];
}

export interface ExerciseDTO {
  movement: MovementDTO;
  sets: TrainingSetDTO[];
}

export interface MovementDTO {
  name: String;
}

export interface TrainingSetDTO {
  repetitions: number;
  weight: number;
}
