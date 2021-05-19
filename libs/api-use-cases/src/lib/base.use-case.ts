export abstract class BaseUseCase<Input, Output> {
  public abstract execute(input: Input): Output;
}
