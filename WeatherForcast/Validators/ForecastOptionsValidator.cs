namespace WeatherForcast.Validators
{
    using FluentValidation;

    using WeatherForcast.Models;

    public class ForecastOptionsValidator : AbstractValidator<ForecastOptionsModel>
    {
        public ForecastOptionsValidator()
        {
            this.RuleFor(_ => _.Location)
                .NotNull()
                .NotEmpty()
                .WithMessage("Location Cannot Be Empty.")
                .MaximumLength(40)
                .WithMessage("Location Must be Under 40 Characters.");

            this.RuleFor(_ => _.Days)
                .GreaterThan(0)
                .WithMessage("Days Cannot be 0")
                .LessThanOrEqualTo(3)
                .WithMessage("This is from a free API that supports up to 3 days of Forecast Data");
        }
    }
}
