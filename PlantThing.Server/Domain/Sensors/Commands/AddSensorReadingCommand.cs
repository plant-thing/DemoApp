using FluentValidation;
using MediatR;
using PlantThing.Server.Infrastructure;

namespace PlantThing.Server.Domain.Sensors.Commands;

public record AddSensorReadingCommand(int SensorId, int Light, decimal PhLevel, int Water, decimal Temperature) : IRequest<int>;

public class AddSensorReadingCommandValidator : AbstractValidator<AddSensorReadingCommand>
{
    public AddSensorReadingCommandValidator()
    {
        RuleFor(x => x.Light).InclusiveBetween(Constants.MIN_LIGHT, Constants.MAX_LIGHT);
        RuleFor(x => x.PhLevel).InclusiveBetween(Constants.MIN_PHLEVEL, Constants.MAX_PHLEVEL);
        RuleFor(x => x.Water).InclusiveBetween(Constants.MIN_WATER, Constants.MAX_WATER);
        RuleFor(x => x.Temperature).InclusiveBetween(Constants.MIN_TEMPERATURE, Constants.MAX_TEMPERATURE);
    }
}

public class AddSensorReadingCommandHandler(ApplicationDbContext applicationDbContext) : IRequestHandler<AddSensorReadingCommand, int>
{
    private readonly ApplicationDbContext applicationDbContext = applicationDbContext;
    private readonly SensorRepository sensorRepository = new(applicationDbContext);

    public async Task<int> Handle(AddSensorReadingCommand request, CancellationToken cancellationToken)
    {
        new AddSensorReadingCommandValidator().ValidateAndThrow(request);

        var sensor = await sensorRepository.GetAsync(request.SensorId, cancellationToken)
            ?? throw new InvalidOperationException("The sensor does not exist");

        var result = sensor.AddSensorReading(request.Light, request.PhLevel, request.Water, request.Temperature);
        applicationDbContext.SaveChanges();

        return result;
    }
}