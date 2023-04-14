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
                .NotEmpty()
                .WithMessage("Field Cannot be Left Empty")
                .GreaterThan(0)
                .WithMessage("Days Cannot be 0");
        }
    }
}
