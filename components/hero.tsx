import { Button } from "@/components/ui/button";
import {
  ShieldIcon,
  BoltIcon,
  UsersIcon,
  CheckIcon,
  LaptopIcon,
  TabletIcon,
} from "@/components/icons";

export function Hero() {
  return (
    <section className="relative z-[1] pt-24 pb-[60px]">
      <div className="wrap hero-grid">
        <div>
          <div className="badge">
            <span className="dot" /> MANIFEST NO. SS—2026 · Now boarding early
            access
          </div>
          <h1 className="headline">
            Move files faster.
            <br />
            Work together <em>better.</em>
          </h1>
          <p className="sub">
            VilSend helps teams securely transfer files across devices with a
            simple, reliable experience built for modern businesses.
          </p>
          <div className="flex flex-wrap gap-3.5 mb-9">
            <Button asChild variant="primary">
              <a href="#waitlist">Join the Waitlist</a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#how">Learn how it works</a>
            </Button>
          </div>
          <div className="trust-line">
            <span>
              <ShieldIcon /> End-to-end encrypted
            </span>
            <span>
              <BoltIcon /> No file size limits
            </span>
            <span>
              <UsersIcon /> Built for teams
            </span>
          </div>
        </div>

        <div className="manifest">
          <div className="manifest-top">
            <div className="manifest-id">
              TRANSFER · SS-00142
              <br />
              AUG 01 2026 · 14:32
            </div>
            <div className="seal">
              <CheckIcon />
            </div>
          </div>
          <div className="route">
            <div className="device">
              <div className="device-icon sending">
                <LaptopIcon />
              </div>
              <div className="device-label">MACBOOK PRO</div>
            </div>
            <div className="route-line">
              <span className="packet" />
              <span className="packet" style={{ animationDelay: "0.8s" }} />
              <span className="packet" style={{ animationDelay: "1.6s" }} />
            </div>
            <div className="device">
              <div className="device-icon receiving">
                <TabletIcon />
              </div>
              <div className="device-label">IPAD AIR</div>
            </div>
          </div>
          <div className="transfer-progress">
            <div className="progress-track">
              <div className="progress-fill" />
            </div>
            <div className="progress-label">
              <span>Transferring…</span>
              <span>2.4 GB</span>
            </div>
          </div>
          <div className="manifest-meta">
            <div className="status-pill">Encrypted · in transit</div>
            <div className="file-size">2.4 GB</div>
          </div>
        </div>
      </div>
    </section>
  );
}
