
using RosieTaylorBranding.Components;
using RosieTaylorBranding.Pages.Home;
using RosieTaylorBranding.Pages.About;
using RosieTaylorBranding.Pages.Contact;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddMemoryCache();
builder.Services.AddHttpClient();
builder.Services.AddHttpContextAccessor();
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});
builder.Services.AddRazorComponents();
builder.Services.AddControllers();
// Add session services
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});
// Add HttpContextAccessor
builder.Services.AddHttpContextAccessor();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

//Caching
app.UseResponseCaching();

app.UseHttpsRedirection();

app.UseStaticFiles();
app.MapStaticAssets();
app.UseAntiforgery();
app.UseSession();
app.MapRazorComponents<App>();

app.MapHomeEndpoints();
app.MapAboutEndpoints();
app.MapContactEndpoints();
app.MapControllers();
app.MapStaticAssets();

app.Run();
