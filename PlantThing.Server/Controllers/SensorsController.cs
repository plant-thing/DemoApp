using MediatR;
using Microsoft.AspNetCore.Mvc;
using PlantThing.Server.Domain.Sensors.Commands;
using PlantThing.Server.Domain.Sensors.Dtos;
using PlantThing.Server.Domain.Sensors.Models;
using PlantThing.Server.Domain.Sensors.Queries;

namespace PlantThing.Server.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class SensorsController(IMediator mediator) : ControllerBase
    {

        [HttpGet("{id:int}")]
        public async Task<SensorDto> GetSensorAsync([FromRoute] int id, CancellationToken cancellationToken)
        {
            var sensor = await mediator.Send(new GetSensorByIdQuery(id), cancellationToken);
            return sensor;
        }

        [HttpPost("{id:int}/reading")]
        public async Task<IActionResult> AddSensorReading([FromRoute] int id, SensorReadingModel model, CancellationToken cancellationToken)
        {
            var command = new AddSensorReadingCommand(id, model.Light, model.PhLevel, model.Water, model.Temperature);

            var result = await mediator.Send(command, cancellationToken);
            return Ok(result);
        }
    }
}
