using Microsoft.AspNetCore.Http.HttpResults;

namespace RosieTaylorBranding.Pages.Contact;

public static class ContactEndpoints
{
    public static WebApplication MapContactEndpoints(this WebApplication app)
    {
        app.MapGet(
                "/api/contact",
                (HttpContext context) =>
                {
                    const string currentVersion = "\"contact-v1.0\"";
                    var clientETag = context.Request.Headers.IfNoneMatch;

                    // If client has current version, return 304 Not Modified
                    if (clientETag == currentVersion)
                    {
                        context.Response.StatusCode = 304;
                        return Results.StatusCode(304);
                    }

                    context.Response.Headers.CacheControl =
                        $"public, max-age={(int)TimeSpan.FromMinutes(0.1).TotalSeconds}";
                    context.Response.Headers.ETag = currentVersion; // Version your content

                    return new RazorComponentResult<ContactPage>();
                }
            )
            .WithName("Contact");

        return app;
    }
}
