import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Page from '../components/Page';

const SiteNotice = () => {
	return (
		<Layout>
			<Page title="Site Notice">
				<Helmet>
					<meta name="robots" content="noindex" />
				</Helmet>

				<h1>Site Notice</h1>
				<h2>Information pursuant to § 5 TMG</h2>
				<p>
					Simon Mayerhofer
					<br />
					zu Hd. Mayerhofer Holding GmbH
					<br />
					Espasinger Str. 7
					<br />
					78333 Stockach
				</p>
				<h2>Contact</h2>
				<p>
					Phone: 015782459155
					<br />
					Telefax: 076129675737
					<br />
					E-mail: sitenotice[-at-]maysi.de
				</p>
				<h2>Responsible for the content according to § 55(2) RStV</h2>
				<p>
					Simon Mayerhofer
					<br />
					zu Hd. Mayerhofer Holding GmbH
					<br />
					Espasinger Str. 7
					<br />
					78333 Stockach
				</p>
				<h3>Liability for Contents</h3>
				<p>
					As service providers, we are liable for own contents of these websites
					according to Paragraph 7, Sect. 1 German Telemedia Act (TMG). However,
					according to Paragraphs 8 to 10 German Telemedia Act (TMG), service
					providers are not obligated to permanently monitor submitted or stored
					information or to search for evidences that indicate illegal
					activities.
				</p>
				<p>
					Legal obligations to removing information or to blocking the use of
					information remain unchallenged. In this case, liability is only
					possible at the time of knowledge about a specific violation of law.
					Illegal contents will be removed immediately at the time we get
					knowledge of them.
				</p>
				<h3>Liability for Links</h3>
				<p>
					Our offer includes links to external third party websites. We have no
					influence on the contents of those websites, therefore we cannot
					guarantee for those contents. Providers or administrators of linked
					websites are always responsible for their own contents.
				</p>
				<p>
					The linked websites had been checked for possible violations of law at
					the time of the establishment of the link. Illegal contents were not
					detected at the time of the linking. A permanent monitoring of the
					contents of linked websites cannot be imposed without reasonable
					indications that there has been a violation of law. Illegal links will
					be removed immediately at the time we get knowledge of them.
				</p>
				<h3>Copyright</h3>
				<p>
					Contents and compilations published on these websites by the providers
					are subject to German copyright laws. Reproduction, editing,
					distribution as well as the use of any kind outside the scope of the
					copyright law require a written permission of the author or
					originator. Downloads and copies of these websites are permitted for
					private use only.
					<br /> The commercial use of our contents without permission of the
					originator is prohibited.
				</p>
				<p>
					Copyright laws of third parties are respected as long as the contents
					on these websites do not originate from the provider. Contributions of
					third parties on this site are indicated as such. However, if you
					notice any violations of copyright law, please inform us. Such
					contents will be removed immediately.
				</p>
			</Page>
		</Layout>
	);
};

export default SiteNotice;
