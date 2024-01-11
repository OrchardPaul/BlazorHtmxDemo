using BlazorHtmxDemo.Features.Login;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

public static class LoginEndpoints
{
    public static WebApplication MapLoginEndpoints(this WebApplication app)
    {
        app.MapPost("/login/check", ([FromForm]string Email) => new RazorComponentResult<CustomerOptions>(new { Email = Email }));

        app.MapPost("/login/customer", ([FromForm]string Email) => new RazorComponentResult<SubmitButton>());

        return app;
    }
}