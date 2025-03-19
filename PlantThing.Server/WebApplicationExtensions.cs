using PlantThing.Server.Infrastructure;

namespace PlantThing.Server;

public static class WebApplicationExtensions
{
    public static async Task InitializeDataAsync(this WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        var initializers = scope.ServiceProvider.GetRequiredService<IEnumerable<IDataInitializer>>();

        foreach (var initializer in initializers.ToList())
        {
            await initializer.SeedAsync();
        }
    }

    public static void SetupEndpoints(this WebApplication app)
    {
        app.MapControllers();
    }
}
