const kaliStack = {
  framework: [
    "armitage",
    "autopsy",
    "brim",
    "burpsuite",
    "chisel",
    "covenant",
    "eztools",
    "gophish",
    "impacket",
    "kape",
    "kibana",
    "metasploit",
    "osquery",
    "procdot",
    "redline",
    "remnux",
    "responder",
    "sherlock",
    "sysinternals",
    "volatility",
    "velociraptor",
    "zeek",
    "zap",
  ],
  commandline: [
    "capa",
    "ffuf",
    "gobuster",
    "hashid",
    "hydra",
    "john",
    "linpeas",
    "mimikatz",
    "nmap",
    "sherlock",
    "sublist3r",
    "sqlmap",
  ],
};

const KSMap = ({ items, colors }) => {
  const KSBadges = items.map((item, i) => {
    const bgColor = colors[i];
    const style = { backgroundColor: bgColor };
    return (
      <li
        key={i}
        className="fs-6 fw-semibold text-uppercase badge rounded-pill m-1"
        style={style}
      >
        <span>{item}</span>
      </li>
    );
  });

  return (
    <ul className="kaliBadges list-inline d-flex flex-wrap justify-content-center pt-2">
      {KSBadges}
    </ul>
  );
};

export { kaliStack, KSMap };
