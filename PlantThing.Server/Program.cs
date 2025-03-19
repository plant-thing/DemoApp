using PlantThing.Server;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

builder.AddDatabases();
builder.AddDependencies();

var app = builder.Build();

app.UseDefaultFiles();
app.MapStaticAssets();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.SetupEndpoints();
await app.InitializeDataAsync();

app.MapFallbackToFile("/index.html");

app.Run();
