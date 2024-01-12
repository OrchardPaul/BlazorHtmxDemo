using BlazorHtmxDemo.Features.Login;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

public static class LoginEndpoints
{
    public static WebApplication MapLoginEndpoints(this WebApplication app)
    {
        app.MapGet("/login/check", (string Email) => {
            if (string.IsNullOrEmpty(Email)){
                return Results.Content("");
            }            
            if (Email == "test.user@gmail.com")
            {
                string[] customers = { "Customer01", "Customer02", "Customer03", "Customer04" };
                return new RazorComponentResult<CustomerSelect>(new { Customers = customers });
            }
            else
            {
                return Results.Content("Email not recognised");
            }            
        });

        app.MapGet("/login/customer", (string Customer) => new RazorComponentResult<SubmitButton>(new { Customer }));

        app.MapGet("/login/go", (HttpContext context) => Results.Content("Welcome"));

        return app;
    }
}