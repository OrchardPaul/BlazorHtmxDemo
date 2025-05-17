using BlazorHtmxDemo.Components;
using BlazorHtmxDemo.Features.Cocktails;
using BlazorHtmxDemo.Features.Counter;
using BlazorHtmxDemo.Features.Home;
using BlazorHtmxDemo.Features.Menu;
using BlazorHtmxDemo.Features.Photos;
using BlazorHtmxDemo.Features.Weather;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddMemoryCache();
builder.Services.AddHttpClient();
builder.Services.AddTransient<CocktailsService>();
builder.Services.AddTransient<PhotosService>();
builder.Services.AddHttpContextAccessor();
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});
builder.Services.AddRazorComponents();
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAntiforgery();
app.UseSession();
app.MapRazorComponents<App>();

app.MapHomeEndpoints();
app.MapMenuEndpoints();
app.MapCounterEndpoints();
app.MapWeatherEndpoints();
app.MapCocktailEndpoints();
app.MapPhotosEndpoints();
app.MapControllers();
app.MapStaticAssets();

app.Run();
