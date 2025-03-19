using Microsoft.EntityFrameworkCore;
using PlantThing.Server.Domain.Sensors;
using PlantThing.Server.Infrastructure;
using PlantThing.Server.Infrastructure.DataInitializers;

namespace PlantThing.Server;

public static class WebApplicationBuilderExtensions
{
    public static void AddDatabases(this WebApplicationBuilder builder)
    {
        builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseInMemoryDatabase(databaseName: "plantthing_db"));
    }

    public static void AddDependencies(this WebApplicationBuilder builder)
    {
        builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<Program>());

        RegisterOrderedDataInitializers(builder);
    }

    private static void RegisterOrderedDataInitializers(WebApplicationBuilder builder)
    {
        builder.Services.AddScoped<IDataInitializer, SensorsInitializer>();
    }
}
