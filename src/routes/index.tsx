/**
 * ==================================================================
 * HOME PAGE — Eagles Hybrid Solutions (single-page advertising site)
 * ==================================================================
 * Structure (in order down the page):
 *   1. NavBar      – logo + links + call button
 *   2. Hero        – big headline, image, main call-to-action
 *   3. Services    – cards from src/data/site.ts
 *   4. Why us      – trust points
 *   5. Parts       – placeholder section for the parts business
 *   6. Testimonials– placeholder reviews
 *   7. Contact     – phone / WhatsApp / hours / Google map
 *   8. Footer
 *
 * TEXT & BUSINESS INFO: edit src/data/site.ts
 * COLOURS & FONTS:      edit src/theme.ts
 * SEO (title, keywords, Google business data): the head() block below
 */
import { createFileRoute } from "@tanstack/react-router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import BuildIcon from "@mui/icons-material/Build";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import InventoryIcon from "@mui/icons-material/Inventory";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import ScheduleIcon from "@mui/icons-material/Schedule";
import VerifiedIcon from "@mui/icons-material/Verified";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import heroImage from "../assets/hero-garage.jpg";
// Company logo (served from Lovable CDN — see src/assets/eagles-logo.jpg.asset.json)
import logoAsset from "../assets/eagles-logo.jpg.asset.json";
import { business, services, testimonials } from "../data/site";

const logoUrl = logoAsset.url;

/* ----------------------------------------------------------------
 * SEO
 * Title + description are what Google shows in search results.
 * The JSON-LD script tells Google this is a local car repair shop in
 * Masvingo, Zimbabwe — that is what makes "mechanics in Masvingo"
 * searches find this site.
 * TODO: after the client gives you real address + coordinates, update
 *       the JSON-LD "address" and "geo" values below.
 * ---------------------------------------------------------------- */
export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title: "Mechanic in Masvingo | Eagles Hybrid Solutions – Hybrid Car Repairs",
      },
      {
        name: "description",
        content:
          "Eagles Hybrid Solutions is a trusted motor mechanic in Masvingo, Zimbabwe. Hybrid battery repairs, engine diagnostics, servicing, brakes and auto electrical work.",
      },
      {
        name: "keywords",
        content:
          "mechanic Masvingo, mechanics in Masvingo Zimbabwe, hybrid car repairs Masvingo, hybrid battery Zimbabwe, car service Masvingo, auto electrician Masvingo",
      },
      {
        property: "og:title",
        content: "Mechanic in Masvingo | Eagles Hybrid Solutions",
      },
      {
        property: "og:description",
        content:
          "Hybrid and petrol vehicle specialists in Masvingo, Zimbabwe. Diagnostics, servicing, hybrid batteries and parts.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: business.name,
          description:
            "Motor mechanic and hybrid vehicle specialist based in Masvingo, Zimbabwe.",
          telephone: business.phone,
          email: business.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address.street,
            addressLocality: business.address.city,
            addressRegion: business.address.region,
            addressCountry: "ZW",
          },
          geo: {
            // TODO: replace with the exact shop coordinates (right-click in Google Maps)
            "@type": "GeoCoordinates",
            latitude: -20.0637,
            longitude: 30.8277,
          },
          areaServed: ["Masvingo", "Masvingo Province", "Zimbabwe"],
          openingHours: ["Mo-Fr 08:00-17:00", "Sa 08:00-13:00"],
          priceRange: "$$",
        }),
      },
    ],
  }),
});

/** Maps the icon name in src/data/site.ts to an actual MUI icon. */
const iconMap: Record<string, React.ReactNode> = {
  battery: <BatteryChargingFullIcon fontSize="large" color="primary" />,
  engine: <SettingsSuggestIcon fontSize="large" color="primary" />,
  service: <BuildIcon fontSize="large" color="primary" />,
  brakes: <DirectionsCarFilledIcon fontSize="large" color="primary" />,
  electrical: <ElectricBoltIcon fontSize="large" color="primary" />,
  parts: <InventoryIcon fontSize="large" color="primary" />,
};

/** Section wrapper so every section has the same spacing. */
function Section({
  id,
  children,
  alt = false,
}: {
  id: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{ py: { xs: 7, md: 11 }, bgcolor: alt ? "background.paper" : "background.default" }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}

function HomePage() {
  const telHref = `tel:${business.phone.replace(/\s/g, "")}`;
  const waHref = `https://wa.me/${business.whatsapp}`;

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      {/* ---------------- 1. NAVBAR ---------------- */}
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{ backdropFilter: "blur(10px)", bgcolor: "rgba(11,18,32,0.85)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ gap: 2 }}>
            {/* Logo + wordmark (logo file: src/assets/eagles-logo.jpg.asset.json) */}
            <Stack direction="row" spacing={1.5} sx={{ flexGrow: 1, alignItems: "center" }}>
              <Box
                component="img"
                src={logoUrl}
                alt={`${business.name} logo`}
                sx={{ height: 44, width: 44, borderRadius: "50%", objectFit: "cover" }}
              />
              <Typography variant="h6" sx={{ lineHeight: 1.1 }}>
                EAGLES
                <Box component="span" sx={{ color: "primary.main" }}>
                  {" "}
                  HYBRID
                </Box>
              </Typography>
            </Stack>

            {/* Anchor links — they scroll down this same page */}
            <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
              {[
                ["Services", "#services"],
                ["Why Us", "#why-us"],
                ["Parts", "#parts"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <Link key={href} href={href} underline="none" color="text.secondary">
                  {label}
                </Link>
              ))}
            </Stack>

            <Button href={telHref} variant="contained" startIcon={<PhoneIcon />}>
              Call Now
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ---------------- 2. HERO ---------------- */}
      <Box component="header" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Chip
                label="Masvingo, Zimbabwe"
                icon={<PlaceIcon />}
                color="primary"
                variant="outlined"
                sx={{ mb: 3 }}
              />
              {/* Only ONE <h1> on the page — important for SEO */}
              <Typography variant="h1" sx={{ fontSize: { xs: 38, md: 56 }, mb: 2 }}>
                Your trusted mechanic in{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  Masvingo
                </Box>
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, mb: 4 }}>
                {business.name} specialises in hybrid and petrol vehicle repairs — hybrid
                batteries, computer diagnostics, servicing and auto electrical work done
                right the first time.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button size="large" variant="contained" href={telHref} startIcon={<PhoneIcon />}>
                  {business.phone}
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  color="primary"
                  href={waHref}
                  target="_blank"
                  rel="noopener"
                  startIcon={<WhatsAppIcon />}
                >
                  WhatsApp Us
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              {/* Hero image — no lazy loading, it is the first thing people see */}
              <Box
                component="img"
                src={heroImage}
                width={1600}
                height={900}
                alt="Mechanic servicing a hybrid car engine at Eagles Hybrid Solutions in Masvingo, Zimbabwe"
                sx={{ width: "100%", height: "auto", borderRadius: 3, border: "1px solid rgba(245,179,1,0.25)" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ---------------- 3. SERVICES ---------------- */}
      <Section id="services" alt>
        <Typography variant="overline" color="primary">
          What we do
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 40 }, mb: 5 }}>
          Workshop services
        </Typography>
        <Grid container spacing={3}>
          {services.map((s) => (
            <Grid key={s.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ bgcolor: "background.default" }}>
                <CardContent>
                  {iconMap[s.icon]}
                  <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                    {s.title}
                  </Typography>
                  <Typography color="text.secondary">{s.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* ---------------- 4. WHY US ---------------- */}
      <Section id="why-us">
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 40 }, mb: 2 }}>
              Why drivers choose us
            </Typography>
            <Typography color="text.secondary">
              {business.yearsExperience} years working on hybrid vehicles in Zimbabwe. We
              explain the fault, quote before we start, and only fit parts we would put in
              our own cars.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={3}>
              {[
                ["Hybrid specialists", "Trained on Toyota, Honda and Lexus hybrid systems."],
                ["Honest quotes", "Written quote before any work starts — no surprises."],
                ["Proper diagnostics", "We scan and test instead of guessing and swapping parts."],
                ["Local & reachable", "Based right here in Masvingo — call, WhatsApp or walk in."],
              ].map(([title, text]) => (
                <Grid key={title} size={{ xs: 12, sm: 6 }}>
                  <Stack direction="row" spacing={1.5}>
                    <VerifiedIcon color="primary" />
                    <Box>
                      <Typography variant="h6">{title}</Typography>
                      <Typography color="text.secondary" variant="body2">
                        {text}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Section>

      {/* ---------------- 5. PARTS (placeholder section) ----------------
          TODO: the client will supply the real parts list / prices / photos.
          When that arrives, replace the text below with a Grid of part cards. */}
      <Section id="parts" alt>
        <Typography variant="overline" color="primary">
          Spares & parts
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 40 }, mb: 2 }}>
          Parts department
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 720, mb: 3 }}>
          TODO — PLACEHOLDER TEXT: describe the parts the workshop supplies (hybrid battery
          packs and cells, inverters, brake components, filters, oils), which brands are
          stocked, warranty terms and how long orders take to arrive.
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap", mb: 3 }}>
          {["Hybrid batteries", "Inverters", "Brake parts", "Filters & oils", "TODO: add more"].map(
            (p) => (
              <Chip key={p} label={p} variant="outlined" />
            ),
          )}
        </Stack>
        <Button variant="contained" href={waHref} target="_blank" rel="noopener" startIcon={<WhatsAppIcon />}>
          Ask about a part
        </Button>
      </Section>

      {/* ---------------- 6. TESTIMONIALS (placeholders) ---------------- */}
      <Section id="reviews">
        <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 40 }, mb: 5 }}>
          What customers say
        </Typography>
        <Grid container spacing={3}>
          {testimonials.map((t, i) => (
            <Grid key={i} size={{ xs: 12, md: 4 }}>
              <Card sx={{ bgcolor: "background.paper" }}>
                <CardContent>
                  <FormatQuoteIcon color="primary" />
                  <Typography sx={{ mb: 2 }}>{t.quote}</Typography>
                  <Typography variant="subtitle2">{t.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {t.car}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* ---------------- 7. CONTACT ---------------- */}
      <Section id="contact" alt>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 40 }, mb: 3 }}>
              Visit or call us
            </Typography>

            <Stack spacing={2.5}>
              <Stack direction="row" spacing={1.5}>
                <PhoneIcon color="primary" />
                <Link href={telHref} underline="hover" color="text.primary">
                  {business.phone}
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <WhatsAppIcon color="primary" />
                <Link href={waHref} target="_blank" rel="noopener" underline="hover" color="text.primary">
                  Chat on WhatsApp
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <EmailIcon color="primary" />
                <Link href={`mailto:${business.email}`} underline="hover" color="text.primary">
                  {business.email}
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <PlaceIcon color="primary" />
                <Typography>
                  {business.address.street}, {business.address.city}, {business.address.country}
                </Typography>
              </Stack>

              <Divider />

              {/* Opening hours */}
              <Stack direction="row" spacing={1.5}>
                <ScheduleIcon color="primary" />
                <Box>
                  {business.hours.map((h) => (
                    <Typography key={h.days} variant="body2" color="text.secondary">
                      <strong>{h.days}:</strong> {h.time}
                    </Typography>
                  ))}
                </Box>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            {/* Google map. TODO: swap mapEmbedUrl in src/data/site.ts for the real location */}
            <Box
              component="iframe"
              title="Eagles Hybrid Solutions location in Masvingo, Zimbabwe"
              src={business.mapEmbedUrl}
              loading="lazy"
              sx={{ width: "100%", height: 380, border: 0, borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Section>

      {/* ---------------- 8. FOOTER ---------------- */}
      <Box component="footer" sx={{ py: 4, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} {business.name} — {business.tagline}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
