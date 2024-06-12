export const Copyright = () => {
  const currYear = new Date().getFullYear();

  type Style = {
    [key: string]: string;
  };

  const sectStyle: Style = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    fontFamily: "Arial",
    alignItems: "center",
    position: "absolute",
    bottom: "50px",
    gap: "6px",
  };

  const aStyle: Style = {
    fontSize: "16px",
    lineHeight: "16px",
    color: "#ecedf3",
  };

  const pStyle: Style = {
    fontSize: "14px",
    color: "#96979b",
  };

  return (
    <section className="copyright__container" style={sectStyle}>
      <a href="mailto:contact@yourmom.com" style={aStyle}>
        contact@yourmom.com
      </a>
      <p style={pStyle}>© {currYear} Your Mom. All rights reserved.</p>
    </section>
  );
};
