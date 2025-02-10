import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: `Corte e Dobra | ADOM Metalúrgica`,
		template: `%s | ADOM Metalúrgica`,
	},
	description:
		"Conheça os serviços de corte e dobra da ADOM Metalúrgica, com qualidade, precisão e eficiência para atender suas necessidades com rapidez e excelência.",
	keywords: ["corte e dobra de metais", "corte e dobra", "metalurgica", "servicos de metalurgica", "metalurgia"],
	alternates: {
		canonical: "https://adommetalurgica.com.br/",
		languages: {
			"pt-br": "https://adommetalurgica.com.br/",
		},
	},
	openGraph: {
		title: "Corte e Dobra | ADOM Metalúrgica",
		description:
			"Conheça os serviços de corte e dobra da ADOM Metalúrgica, com qualidade, precisão e eficiência para atender suas necessidades com rapidez e excelência.",
		url: "https://corte-e-dobra-adom-metalurgica.com.br/",
		locale: "pt_BR",
		type: "website",
		siteName: "ADOM Metalúrgica",
	// 	images: [
	// 		{
	// 			origin: "/img/logo.webp",
	// 			type: "image/png",
	// 			href: "/img/logo.webp",
	// 			url: "/img/logo.webp",
	// 			width: 300,
	// 			height: 135,
	// 			secureUrl: "/img/logo.webp",
	// 			alt: "ADOM | Soluções em Metalúrgica",
	// 		},
	// 	],
	// },
	// robots: {
	// 	index: true,
	// 	follow: true,
	// 	nocache: true,
	// 	googleBot: {
	// 		index: true,
	// 		follow: true,
	// 		noimageindex: false,
	// 		"max-video-preview": 2,
	// 		"max-image-preview": "large",
	// 		"max-snippet": -1,
	// 	},
	// },
	// icons: {
	// 	icon: "/img/favicon.png",
	// 	shortcut: "/img/favicon.png",
	// 	apple: "/img/favicon.png",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="overflow-x-hidden bg-brand-400">
        {children}
      </body>
    </html>
  );
}
