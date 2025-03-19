using MediatR;
using PlantThing.Server.Domain.Sensors.Dtos;
using PlantThing.Server.Infrastructure;

namespace PlantThing.Server.Domain.Sensors.Queries;

public record GetSensorByIdQuery(int Id) : IRequest<SensorDto>;

public class GetSensorByIdQueryHandler(ApplicationDbContext applicationDbContext) : IRequestHandler<GetSensorByIdQuery, SensorDto>
{
    private readonly SensorRepository sensorRepository = new(applicationDbContext);

    public async Task<SensorDto> Handle(GetSensorByIdQuery request, CancellationToken cancellationToken)
    {
        var sensor = await sensorRepository.GetAsync(request.Id, cancellationToken)
            ?? throw new InvalidOperationException("The poll does not exist");

        return sensor.ToDto();
    }
}