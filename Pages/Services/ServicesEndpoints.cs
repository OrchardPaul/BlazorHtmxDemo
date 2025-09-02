using Microsoft.AspNetCore.Http.HttpResults;

namespace RosieTaylorBranding.Pages.Services;

public static class ServicesEndpoints
{
    public static WebApplication MapServicesEndpoints(this WebApplication app)
    {
        app.MapGet(
                "/api/services",
                (HttpContext context) =>
                {
                    const string currentVersion = "\"services-v1.0\"";
                    var clientETag = context.Request.Headers.IfNoneMatch;

                    // If client has current version, return 304 Not Modified
                    if (clientETag == currentVersion) 
                    {
                        context.Response.StatusCode = 304;
                        return Results.StatusCode(304);
                    }

                    // context.Response.Headers.CacheControl =
                    //     $"public, max-age={(int)TimeSpan.FromMinutes(0.1).TotalSeconds}";
                    // context.Response.Headers.ETag = currentVersion; // Version your content
                    // Disable all caching
                    context.Response.Headers.CacheControl = "no-cache, no-store, must-revalidate";
                    context.Response.Headers.Pragma = "no-cache";
                    context.Response.Headers.Expires = "0";

                    return new RazorComponentResult<ServicesPage>();
                }
            )
            .WithName("Services");

        return app;
    }
}
