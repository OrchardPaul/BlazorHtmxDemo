using Microsoft.AspNetCore.Http.HttpResults;

namespace RosieTaylorBranding.Pages.About;

public static class AboutEndpoints
{
    public static WebApplication MapAboutEndpoints(this WebApplication app)
    {
        app.MapGet(
                "/api/about",
                (HttpContext context) =>
                {
                    const string currentVersion = "\"about-v1.0\"";
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

                    return new RazorComponentResult<AboutPage>();
                }
            )
            .WithName("About");

        return app;
    }
}
