namespace PlantThing.Server.Infrastructure;

public interface IDataInitializer
{
    public Task SeedAsync();
}
