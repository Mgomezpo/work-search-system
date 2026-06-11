// Generador de CV ATS en .docx (docx-js). Edita el objeto CONFIG y corre: node build_cv.js
// Requiere: npm install docx   |   Para PDF: LibreOffice (--convert-to pdf)
const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat, ExternalHyperlink, BorderStyle } = require("docx");

const FONT = "Arial", NAVY = "1F3864";
const RULE = { style: BorderStyle.SINGLE, size: 8, color: NAVY, space: 2 };
const H = (t) => new Paragraph({ spacing: { before: 200, after: 80 }, border: { bottom: RULE }, children: [new TextRun({ text: t.toUpperCase(), bold: true, size: 24, color: NAVY, font: FONT })] });
const B = (t) => new Paragraph({ numbering: { reference: "b", level: 0 }, spacing: { after: 40 }, children: [new TextRun({ text: t, size: 20, font: FONT })] });
const RH = (title, dates) => new Paragraph({ spacing: { before: 140 }, tabStops: [{ type: "right", position: 9360 }], children: [new TextRun({ text: title, bold: true, size: 21, font: FONT }), new TextRun({ text: `\t${dates}`, size: 20, color: "595959", font: FONT })] });
const CL = (c, l) => new Paragraph({ spacing: { after: 40 }, tabStops: [{ type: "right", position: 9360 }], children: [new TextRun({ text: c, italics: true, size: 20, color: NAVY, font: FONT }), new TextRun({ text: `\t${l}`, italics: true, size: 19, color: "595959", font: FONT })] });
const SK = (a, b) => new Paragraph({ spacing: { after: 30 }, children: [new TextRun({ text: `${a}: `, bold: true, size: 20, font: FONT }), new TextRun({ text: b, size: 20, font: FONT })] });

// ====== EDITA AQUI ======
const CONFIG = {
  name: "NOMBRE COMPLETO",
  subtitle: "Titulo objetivo | Especialidad",
  contact: "Ciudad, Pais (Remote)  •  email@dominio.com  •  +00 000 000 0000  •  ",
  linkedin: "https://www.linkedin.com/in/usuario/",
  summary: "3-4 lineas: quien eres + años de experiencia + 2-3 logros con numeros + stack. Inyecta keywords del rol objetivo.",
  skills: [
    ["Languages & ML", "Python, SQL, Machine Learning, ..."],
    ["Cloud & Data Eng", "AWS, PostgreSQL, ETL, Docker, ..."],
    ["Idiomas", "English (C1) • Spanish (Native)"],
  ],
  experience: [
    { title: "Cargo", dates: "Mes Año – Presente", company: "Empresa", location: "Ciudad / Remote",
      bullets: ["Logro con verbo + tecnologia + resultado medible.", "Logro 2.", "Logro 3."] },
  ],
  education: [{ title: "Titulo — GPA", dates: "Mes Año – Mes Año", school: "Institucion", location: "Ciudad" }],
  certs: ["Certificacion — Emisor.", "Languages: Spanish (Native) • English (C1)."],
  outfile: "CV_ATS.docx",
};
// ========================

const doc = new Document({
  numbering: { config: [{ reference: "b", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 180 } } } }] }] },
  styles: { default: { document: { run: { font: FONT, size: 20 } } } },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, right: 1440, bottom: 1080, left: 1440 } } },
    children: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 20 }, children: [new TextRun({ text: CONFIG.name, bold: true, size: 34, color: NAVY, font: FONT })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 }, children: [new TextRun({ text: CONFIG.subtitle, size: 22, color: "595959", font: FONT })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 }, children: [new TextRun({ text: CONFIG.contact, size: 18, font: FONT }), new ExternalHyperlink({ link: CONFIG.linkedin, children: [new TextRun({ text: "LinkedIn", style: "Hyperlink", size: 18, font: FONT })] })] }),
      H("Professional Summary"),
      new Paragraph({ spacing: { after: 40 }, alignment: AlignmentType.JUSTIFIED, children: [new TextRun({ text: CONFIG.summary, size: 20, font: FONT })] }),
      H("Core Skills"), ...CONFIG.skills.map(([a, b]) => SK(a, b)),
      H("Professional Experience"),
      ...CONFIG.experience.flatMap(r => [RH(r.title, r.dates), CL(r.company, r.location), ...r.bullets.map(B)]),
      H("Education"),
      ...CONFIG.education.flatMap(e => [RH(e.title, e.dates), CL(e.school, e.location)]),
      H("Certifications & Languages"), ...CONFIG.certs.map(B),
    ],
  }],
});

Packer.toBuffer(doc).then(buf => { fs.writeFileSync(CONFIG.outfile, buf); console.log("saved", CONFIG.outfile); });
