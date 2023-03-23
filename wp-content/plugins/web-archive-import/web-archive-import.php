<?php

/**
 * @package Web Archive Importer
 */
/*
Plugin Name: Web Archive Importer
Plugin URI: https://kazwp.com
Description: Web Archive Importer support Web masters to import all posts, category, pages from web archive database to restore back from old data.
Version: 1.0.0
Requires at least: 5.0
Requires PHP: 5.2
Author: Kaz WP
Author URI: https://kazwp.com
License: KazwpWAI
*/

function proxies()
{
    $proxies = [
        "182.54.239.248:8265",
        "182.54.239.210:8227",
        "182.54.239.59:8076",
        "193.8.215.71:8090",
        "45.137.43.106:7660",
        "182.54.239.182:8199",
        "182.54.239.150:8167",
        "45.137.40.23:8576",
        "45.137.40.144:8697",
        "45.137.40.221:8774",
        "193.8.215.249:8268",
        "182.54.239.184:8201",
        "182.54.239.136:8153",
        "182.54.239.252:8269",
        "45.137.43.113:7667",
        "45.137.40.206:8759",
        "45.137.40.245:8798",
        "182.54.239.87:8104",
        "193.8.215.216:8235",
        "193.8.215.129:8148",
        "182.54.239.62:8079",
        "45.137.43.181:7735",
        "45.137.43.45:7599",
        "45.137.43.128:7682",
        "182.54.239.247:8264",
        "45.137.43.81:7635",
        "193.8.215.88:8107",
        "45.137.40.73:8626",
        "182.54.239.89:8106",
        "182.54.239.204:8221",
        "45.137.43.234:7788",
        "45.137.43.11:7565",
        "45.137.43.141:7695",
        "182.54.239.79:8096",
        "193.8.215.91:8110",
        "193.8.215.33:8052",
        "182.54.239.28:8045",
        "182.54.239.149:8166",
        "193.8.215.44:8063",
        "45.137.40.226:8779",
        "45.131.213.163:7711",
        "182.54.239.214:8231",
        "182.54.239.121:8138",
        "45.131.213.87:7635",
        "45.137.43.246:7800",
        "193.8.215.253:8272",
        "45.137.43.96:7650",
        "182.54.239.7:8024",
        "182.54.239.138:8155",
        "182.54.239.216:8233",
        "45.137.40.148:8701",
        "45.137.43.13:7567",
        "45.137.43.148:7702",
        "45.137.43.208:7762",
        "45.137.40.229:8782",
        "193.8.215.16:8035",
        "45.137.43.230:7784",
        "45.137.43.214:7768",
        "45.137.43.17:7571",
        "45.137.40.77:8630",
        "45.137.40.242:8795",
        "193.8.215.123:8142",
        "182.54.239.91:8108",
        "182.54.239.69:8086",
        "45.137.43.95:7649",
        "182.54.239.193:8210",
        "182.54.239.84:8101",
        "45.137.43.21:7575",
        "193.8.215.254:8273",
        "45.137.40.115:8668",
        "45.137.43.125:7679",
        "45.137.43.30:7584",
        "193.8.215.180:8199",
        "193.8.215.67:8086",
        "45.137.43.164:7718",
        "193.8.215.203:8222",
        "45.137.40.76:8629",
        "45.137.40.10:8563",
        "45.137.43.77:7631",
        "182.54.239.10:8027",
        "45.137.43.102:7656",
        "45.137.43.189:7743",
        "45.137.40.116:8669",
        "45.137.43.75:7629",
        "45.137.43.130:7684",
        "45.131.213.194:7742",
        "182.54.239.167:8184",
        "45.137.40.217:8770",
        "193.8.215.185:8204",
        "182.54.239.54:8071",
        "182.54.239.78:8095",
        "45.137.43.36:7590",
        "45.137.43.2:7556",
        "45.137.40.74:8627",
        "45.137.40.202:8755",
        "45.137.43.226:7780",
        "45.137.40.86:8639",
        "182.54.239.185:8202",
        "45.137.40.83:8636",
        "45.137.43.111:7665",
        "45.137.43.99:7653",
        "45.131.213.177:7725",
        "45.137.43.206:7760",
        "45.131.213.178:7726",
        "45.137.43.83:7637",
        "45.137.40.184:8737",
        "45.137.43.194:7748",
        "182.54.239.27:8044",
        "182.54.239.98:8115",
        "193.8.215.116:8135",
        "45.137.40.114:8667",
        "45.137.43.103:7657",
        "45.131.213.133:7681",
        "182.54.239.61:8078",
        "45.137.43.92:7646",
        "45.131.213.134:7682",
        "45.137.43.62:7616",
        "182.54.239.159:8176",
        "45.137.43.200:7754",
        "182.54.239.151:8168",
        "45.137.43.205:7759",
        "182.54.239.183:8200",
        "45.137.40.175:8728",
        "193.8.215.224:8243",
        "45.131.213.64:7612",
        "45.137.43.20:7574",
        "45.131.213.5:7553",
        "182.54.239.83:8100",
        "182.54.239.64:8081",
        "193.8.231.135:9141",
        "193.8.231.116:9122",
        "45.137.40.160:8713",
        "182.54.239.230:8247",
        "45.137.40.34:8587",
        "45.137.40.105:8658",
        "182.54.239.63:8080",
        "45.137.43.4:7558",
        "45.137.40.113:8666",
        "193.8.231.122:9128",
        "45.137.40.101:8654",
        "182.54.239.92:8109",
        "45.137.40.134:8687",
        "45.137.43.193:7747",
        "45.137.40.84:8637",
        "45.137.40.186:8739",
        "45.131.213.204:7752",
        "45.131.213.200:7748",
        "45.137.43.239:7793",
        "45.137.43.43:7597",
        "193.8.215.82:8101",
        "45.137.40.210:8763",
        "182.54.239.140:8157",
        "45.137.40.207:8760",
        "182.54.239.122:8139",
        "45.137.43.149:7703",
        "45.154.244.132:8170",
        "182.54.239.208:8225",
        "182.54.239.249:8266",
        "45.137.40.8:8561",
        "45.131.213.79:7627",
        "45.137.43.23:7577",
        "45.137.43.245:7799",
        "45.131.213.47:7595",
        "45.137.40.95:8648",
        "45.137.40.89:8642",
        "193.8.231.192:9198",
        "45.131.213.198:7746",
        "45.137.43.187:7741",
        "182.54.239.165:8182",
        "182.54.239.175:8192",
        "45.137.43.127:7681",
        "193.8.231.33:9039",
        "182.54.239.19:8036",
        "45.137.43.72:7626",
        "45.131.213.2:7550",
        "45.131.213.7:7555",
        "45.131.213.9:7557",
        "45.131.213.10:7558",
        "45.131.213.11:7559",
        "45.131.213.12:7560",
        "45.131.213.17:7565",
        "45.131.213.21:7569",
        "45.131.213.22:7570",
        "45.131.213.23:7571",
        "45.131.213.26:7574",
        "45.131.213.28:7576",
        "45.131.213.31:7579",
        "45.131.213.32:7580",
        "45.131.213.34:7582",
        "45.131.213.36:7584",
        "45.131.213.41:7589",
        "45.131.213.44:7592",
        "45.131.213.45:7593",
        "45.131.213.51:7599",
        "45.131.213.65:7613",
        "45.131.213.70:7618",
        "45.131.213.73:7621",
        "45.131.213.74:7622",
        "45.131.213.75:7623",
        "45.131.213.80:7628",
        "45.131.213.85:7633",
        "45.131.213.86:7634",
        "45.131.213.88:7636",
        "45.131.213.89:7637",
        "45.131.213.93:7641",
        "45.131.213.102:7650",
        "45.131.213.104:7652",
        "45.131.213.106:7654",
        "45.131.213.107:7655",
        "45.131.213.110:7658",
        "45.131.213.112:7660",
        "45.131.213.118:7666",
        "45.131.213.120:7668",
        "45.131.213.121:7669",
        "45.131.213.122:7670",
        "45.131.213.124:7672",
        "45.131.213.127:7675",
        "45.131.213.129:7677",
        "45.131.213.130:7678",
        "45.131.213.136:7684",
        "45.131.213.143:7691",
        "45.131.213.144:7692",
        "45.131.213.148:7696",
        "45.131.213.151:7699",
        "45.131.213.153:7701",
        "45.131.213.157:7705",
        "45.131.213.160:7708",
        "45.131.213.161:7709",
        "45.131.213.165:7713",
        "45.131.213.166:7714",
        "45.131.213.167:7715",
        "45.131.213.168:7716",
        "45.131.213.172:7720",
        "45.131.213.176:7724",
        "45.131.213.179:7727",
        "45.131.213.181:7729",
        "45.131.213.182:7730",
        "45.131.213.185:7733",
        "45.131.213.192:7740",
        "45.131.213.195:7743",
        "45.131.213.196:7744",
        "45.131.213.199:7747",
        "45.131.213.207:7755",
        "45.131.213.208:7756",
        "45.131.213.209:7757",
        "45.131.213.210:7758",
        "45.131.213.213:7761",
        "45.131.213.218:7766",
        "45.131.213.219:7767",
        "45.131.213.220:7768",
        "45.131.213.222:7770",
        "45.131.213.224:7772",
        "45.131.213.227:7775",
        "45.131.213.229:7777",
        "45.131.213.230:7778",
        "45.131.213.231:7779",
        "45.131.213.232:7780",
        "45.131.213.234:7782",
        "45.131.213.235:7783",
        "45.131.213.241:7789",
        "45.131.213.246:7794",
        "45.131.213.248:7796",
        "45.131.213.249:7797",
        "45.131.213.251:7799",
        "45.131.213.254:7802",
        "193.8.215.17:8036",
        "193.8.215.18:8037",
        "193.8.215.26:8045",
        "193.8.215.27:8046",
        "193.8.215.34:8053",
        "193.8.215.37:8056",
        "193.8.215.39:8058",
        "193.8.215.50:8069",
        "193.8.215.52:8071",
        "193.8.215.60:8079",
        "193.8.215.61:8080",
        "193.8.215.64:8083",
        "193.8.215.65:8084",
        "193.8.215.66:8085",
        "193.8.215.79:8098",
        "193.8.215.83:8102",
        "193.8.215.84:8103",
        "193.8.215.87:8106",
        "193.8.215.89:8108",
        "193.8.215.94:8113",
        "193.8.215.100:8119",
        "193.8.215.102:8121",
        "193.8.215.103:8122",
        "193.8.215.105:8124",
        "193.8.215.106:8125",
        "193.8.215.107:8126",
        "193.8.215.108:8127",
        "193.8.215.110:8129",
        "193.8.215.112:8131",
        "193.8.215.113:8132",
        "193.8.215.114:8133",
        "193.8.215.127:8146",
        "193.8.215.132:8151",
        "193.8.215.133:8152",
        "193.8.215.147:8166",
        "193.8.215.148:8167",
        "193.8.215.153:8172",
        "193.8.215.155:8174",
        "193.8.215.157:8176",
        "193.8.215.166:8185",
        "193.8.215.168:8187",
        "193.8.215.170:8189",
        "193.8.215.173:8192",
        "193.8.215.178:8197",
        "193.8.215.179:8198",
        "193.8.215.189:8208",
        "193.8.215.190:8209",
        "193.8.215.191:8210",
        "193.8.215.195:8214",
        "193.8.215.196:8215",
        "193.8.215.202:8221",
        "193.8.215.206:8225",
        "193.8.215.208:8227",
        "193.8.215.217:8236",
        "193.8.215.221:8240",
        "193.8.215.240:8259",
        "193.8.231.132:9138",
        "182.54.239.67:8084",
        "182.54.239.125:8142",
        "182.54.239.75:8092",
        "182.54.239.202:8219",
        "182.54.239.23:8040",
        "182.54.239.240:8257",
        "182.54.239.46:8063",
        "182.54.239.102:8119",
        "182.54.239.127:8144",
        "182.54.239.245:8262",
        "182.54.239.179:8196",
        "182.54.239.142:8159",
        "182.54.239.156:8173",
        "182.54.239.97:8114",
        "182.54.239.145:8162",
        "182.54.239.15:8032",
        "182.54.239.254:8271",
        "182.54.239.112:8129",
        "182.54.239.118:8135",
        "182.54.239.163:8180",
        "182.54.239.3:8020",
        "182.54.239.206:8223",
        "182.54.239.131:8148",
        "182.54.239.4:8021",
        "182.54.239.31:8048",
        "182.54.239.189:8206",
        "182.54.239.104:8121",
        "182.54.239.0:8017",
        "182.54.239.221:8238",
        "182.54.239.108:8125",
        "182.54.239.56:8073",
        "182.54.239.1:8018",
        "182.54.239.119:8136",
        "182.54.239.93:8110",
        "182.54.239.65:8082",
        "182.54.239.135:8152",
        "182.54.239.203:8220",
        "182.54.239.11:8028",
        "182.54.239.238:8255",
        "182.54.239.253:8270",
        "182.54.239.224:8241",
        "182.54.239.39:8056",
        "182.54.239.174:8191",
        "182.54.239.190:8207",
        "182.54.239.153:8170",
        "182.54.239.241:8258",
        "182.54.239.227:8244",
        "182.54.239.139:8156",
        "182.54.239.234:8251",
        "182.54.239.105:8122",
        "182.54.239.38:8055",
        "182.54.239.49:8066",
        "182.54.239.106:8123",
        "182.54.239.82:8099",
        "182.54.239.50:8067",
        "182.54.239.103:8120",
        "182.54.239.41:8058",
        "182.54.239.250:8267",
        "182.54.239.110:8127",
        "182.54.239.187:8204",
        "182.54.239.143:8160",
        "182.54.239.188:8205",
        "182.54.239.152:8169",
        "182.54.239.130:8147",
        "182.54.239.232:8249",
        "182.54.239.12:8029",
        "182.54.239.13:8030",
        "182.54.239.223:8240",
        "182.54.239.212:8229",
        "182.54.239.76:8093",
        "182.54.239.180:8197",
        "182.54.239.73:8090",
        "182.54.239.30:8047",
        "182.54.239.51:8068",
        "182.54.239.133:8150",
        "182.54.239.81:8098",
        "182.54.239.26:8043",
        "182.54.239.74:8091",
        "182.54.239.197:8214",
        "182.54.239.95:8112",
        "182.54.239.211:8228",
        "182.54.239.213:8230",
        "182.54.239.14:8031",
        "182.54.239.44:8061",
        "182.54.239.132:8149",
        "182.54.239.52:8069",
        "182.54.239.60:8077",
        "182.54.239.55:8072",
        "182.54.239.111:8128",
        "182.54.239.88:8105",
        "182.54.239.99:8116",
        "182.54.239.34:8051",
        "182.54.239.178:8195",
        "193.151.161.5:8348",
        "182.54.239.160:8177",
        "193.151.161.119:8462",
        "182.54.239.228:8245",
        "182.54.239.8:8025",
        "182.54.239.123:8140",
        "182.54.239.199:8216",
        "193.151.161.235:8578",
        "182.54.239.171:8188",
        "182.54.239.161:8178",
        "182.54.239.220:8237",
        "182.54.239.141:8158",
        "182.54.239.176:8193",
        "182.54.239.21:8038",
        "182.54.239.170:8187",
        "182.54.239.196:8213",
        "182.54.239.57:8074",
        "182.54.239.5:8022",
        "182.54.239.244:8261",
        "182.54.239.114:8131",
        "182.54.239.24:8041",
        "182.54.239.42:8059",
        "182.54.239.147:8164",
        "182.54.239.192:8209",
        "182.54.239.229:8246",
        "182.54.239.215:8232",
        "182.54.239.158:8175",
        "45.137.40.244:8797",
        "182.54.239.48:8065",
        "45.137.40.33:8586",
        "45.137.40.152:8705",
        "182.54.239.154:8171",
        "182.54.239.219:8236",
        "193.8.215.212:8231",
        "193.8.215.121:8140",
        "45.137.40.181:8734",
        "45.137.40.124:8677",
        "45.131.213.116:7664",
        "45.137.40.47:8600",
        "45.137.40.153:8706",
        "193.8.215.41:8060",
        "45.137.43.137:7691",
        "182.54.239.181:8198",
        "193.8.215.46:8065",
        "45.137.40.172:8725",
        "45.137.43.129:7683",
        "45.137.40.81:8634",
        "182.54.239.129:8146",
        "182.54.239.155:8172",
        "193.8.215.2:8021",
        "45.137.40.93:8646",
        "45.131.213.137:7685",
        "45.137.43.171:7725",
        "182.54.239.205:8222",
        "45.137.43.7:7561",
        "45.137.40.16:8569",
        "45.137.40.106:8659",
        "45.137.40.237:8790",
        "193.8.215.78:8097",
        "193.8.215.241:8260",
        "45.131.213.170:7718",
        "182.54.239.96:8113",
        "45.131.213.59:7607",
        "45.137.43.179:7733",
        "45.137.40.171:8724",
        "45.137.40.241:8794",
        "45.137.43.114:7668",
        "45.137.40.132:8685",
        "182.54.239.36:8053",
        "182.54.239.172:8189",
        "193.8.215.159:8178",
        "45.137.40.79:8632",
        "182.54.239.66:8083",
        "45.137.43.237:7791",
        "45.137.43.107:7661",
        "45.137.40.22:8575",
        "182.54.239.201:8218",
        "45.137.40.54:8607",
        "45.137.43.19:7573",
        "182.54.239.22:8039",
        "45.131.213.193:7741",
        "182.54.239.2:8019",
        "45.137.40.198:8751"
    ];
    return  $proxies[rand(0, count($proxies) - 1)];
}
function wai_menu()
{

    add_menu_page(
        'Web Archive Importer',
        'Web Archive Importer',
        'manage_options',
        'web-archive-importer',
        'wai_page',
        'dashicons-schedule',
        3
    );
}



add_action('admin_menu', 'wai_menu');



function wai_page()
{

    $import_domain = get_option('import_domain');
    $cat_sel = get_option('cat_sel');
    $page_sel = get_option('page_sel');
    $post_sel = get_option('post_sel');
?>
    <h1>
        <?php echo "Welcome to Web Archive Importer" ?>
    </h1>
    <form method="POST" action="<?php echo admin_url('admin.php'); ?>">
        <table class="form-table" role="presentation">
            <input type="hidden" name="action" value="wai10500" />
            <tbody>
                <tr>
                    <th scope="row"><label for="import_domain">Domain to Import</label></th>
                    <td><input name="import_domain" type="text" id="import_domain" class="regular-text" value="<?php echo $import_domain ?>"></td>
                </tr>
                <tr>
                    <th scope="row"><label for="cat_sel">Category selector</label></th>
                    <td><input name="cat_sel" type="text" id="cat_sel" class="regular-text" value="<?php echo $cat_sel ?>"></td>
                </tr>

                <tr>
                    <th scope="row"><label for="page_sel">Page selector</label></th>
                    <td><input name="page_sel" type="text" id="page_sel" class="regular-text" value="<?php echo $page_sel ?>"></td>
                </tr>

                <tr>
                    <th scope="row"><label for="post_sel">Post selector</label></th>
                    <td><input name="post_sel" type="text" id="post_sel" class="regular-text" value="<?php echo $post_sel ?>"></td>
                </tr>

            </tbody>
        </table>
        <p class="submit"><input type="submit" name="submit" id="submit" class="button button-primary" value="Lưu thay đổi"></p>
    </form>
    <div class="all-url-import">
        <?php
        if (isset($import_domain) && !empty($import_domain)) {
            $url_data = get_option("listwp");

            if (empty($url_data)) {
                $url_data = get_all_url($import_domain);
                update_option("listwp", $url_data);
            }

        ?>
            <script>
                jQuery(document).ready(
                    function($) {
                        $(document).on("click", "#import-categories", function(e) {
                            var tr = $(".url-list tbody>tr");
                            var tracker = [];
                            for (var i = 0; i < tr.length; i++) {
                                tr[i]
                                var url = $(tr[i]).attr('data-url');
                                var td = $(tr[i]).children('td');
                                tracker.push({
                                    "url": url,
                                    "tr": tr[i]
                                });
                            }
                            tracker.sort().reverse();
                            makeRequest(tracker, "category");
                        });
                        $(document).on("click", "#import-posts", function(e) {
                            var tr = $(".url-list tbody>tr");
                            var tracker = [];
                            for (var i = 0; i < tr.length; i++) {
                                tr[i]
                                var url = $(tr[i]).attr('data-url');
                                var td = $(tr[i]).children('td');
                                tracker.push({
                                    "url": url,
                                    "tr": tr[i]
                                });
                            }
                            tracker.sort().reverse();
                            makeRequest(tracker, "post");
                        })
                        $(document).on("click", "#import-pages", function(e) {
                            var tr = $(".url-list tbody>tr");
                            var tracker = [];
                            for (var i = 0; i < tr.length; i++) {
                                tr[i]
                                var url = $(tr[i]).attr('data-url');
                                var original = $(tr[i]).attr('data-original');
                                var td = $(tr[i]).children('td');
                                tracker.push({
                                    "original": original,
                                    "url": url,
                                    "tr": tr[i]
                                });
                            }
                            tracker.sort().reverse();
                            makeRequest(tracker, "page");
                        })

                        function makeRequest(tracker, type) {
                            var tracker_roww = tracker.pop();
                            if (tracker_roww['tr']) {
                                var td = $(tracker_roww['tr']).children('td');
                                var data_type = $(tracker_roww['tr']).attr("data-type");
                                if (data_type == null || data_type == "" || data_type == type) {
                                    $(td[3]).html("Checking for existing...");
                                    jQuery.ajax({
                                        type: "post",
                                        dataType: "json",
                                        url: '<?php echo admin_url('admin-ajax.php') ?>',
                                        data: {
                                            "url": tracker_roww['url'],
                                            "action": "wai_check_exist",
                                            "type": type
                                        },
                                        success: function(msg) {
                                            console.log(msg);
                                            if (msg['status'] == "failed") {
                                                $(td[3]).html(msg['message']);

                                                if (tracker.length) {
                                                    makeRequest(tracker, type);
                                                } else return;

                                            } else if (msg['status'] == "success") {
                                                $(td[3]).html("Checking type...");

                                                jQuery.ajax({
                                                    type: "post",
                                                    dataType: "json",
                                                    url: '<?php echo admin_url('admin-ajax.php') ?>',
                                                    retryLimit: 3,
                                                    tryCount: 0,
                                                    data: {
                                                        "url": tracker_roww['url'],
                                                        "action": "wai_check_type",
                                                        "type": type
                                                    },
                                                    success: function(msg) {
                                                        console.log(msg);
                                                        if (msg['status'] == "failed") {
                                                            $(td[3]).html(msg['message']);
                                                            if (tracker.length) {
                                                                makeRequest(tracker, type);
                                                            } else return;
                                                        } else if (msg['status'] == "success") {
                                                            $(td[3]).html("Importing...");

                                                            jQuery.ajax({
                                                                type: "post",
                                                                retryLimit: 3,
                                                                tryCount: 0,
                                                                dataType: "json",
                                                                url: '<?php echo admin_url('admin-ajax.php') ?>',
                                                                data: {
                                                                    "url": tracker_roww['url'],
                                                                    "action": "wai_import",
                                                                    "type": type
                                                                },
                                                                success: function(msg) {
                                                                    console.log(msg);
                                                                    if (msg['status'] == "failed") {
                                                                        $(td[3]).html(msg['message']);
                                                                    } else if (msg['status'] == "success") {
                                                                        $(td[3]).html("Successfully Imported");
                                                                    }
                                                                    if (tracker.length) {
                                                                        makeRequest(tracker, type);
                                                                    } else return;
                                                                },
                                                                error: function(xhr, textStatus, errorThrown) {

                                                                    if (textStatus == 'error') {
                                                                        this.tryCount++;
                                                                        if (this.tryCount <= this.retryLimit) {
                                                                            $(td[3]).html("Timeout, try again");
                                                                            $.ajax(this);
                                                                            return;
                                                                        } else {
                                                                            makeRequest(tracker, type);
                                                                        }
                                                                        return;
                                                                    }
                                                                    if (xhr.status == 500) {
                                                                        //handle error
                                                                    } else {
                                                                        //handle error
                                                                    }
                                                                }
                                                            });
                                                        }
                                                    },
                                                    error: function(xhr, textStatus, errorThrown) {

                                                        if (textStatus == 'error') {
                                                            this.tryCount++;
                                                            if (this.tryCount <= this.retryLimit) {
                                                                $(td[3]).html("Timeout, try again");
                                                                $.ajax(this);
                                                                return;
                                                            } else {
                                                                makeRequest(tracker, type);
                                                            }
                                                            return;
                                                        }
                                                        if (xhr.status == 500) {
                                                            //handle error
                                                        } else {
                                                            //handle error
                                                        }
                                                    }
                                                });
                                            }

                                        }

                                    });

                                    // $.ajax({
                                    //     // ajax settings
                                    //     data: {
                                    //         'url': tracker_roww['url']
                                    //     },
                                    //     success: function() {
                                    //         // use returned result here
                                    //     },
                                    //     complete: function() {
                                    //         if (tracker.length) {
                                    //             makeRequest(tracker);
                                    //         } else return;
                                    //     }
                                    // });
                                } else {
                                    if (tracker.length) {
                                        makeRequest(tracker, type);
                                    } else return;
                                }
                            }
                        }


                    }

                );
            </script>
            <table class=" styled-table">
                <thead>
                    <tr>
                        <th>Go step by step</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Step 1</td>
                        <td><button type="submit" name="submit" id="import-categories" class="button button-primary">Import categories</button></td>
                    </tr>
                    <tr>
                        <td>Step 2</td>
                        <td><button type="submit" name="submit" id="import-pages" class="button button-primary">Import pages</button></td>
                    </tr>
                    <tr>
                        <td>Step 3</td>
                        <td><button type="submit" name="submit" id="import-posts" class="button button-primary">Import posts</button></td>
                    </tr>
                </tbody>
            </table>
            <style>
                .url-list {
                    width: 100%;
                }

                .styled-table {
                    border-collapse: collapse;
                    margin: 25px 0;
                    font-size: 0.9em;
                    font-family: sans-serif;
                    min-width: 400px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
                }

                .styled-table thead tr {
                    background-color: #009879;
                    color: #ffffff;
                    text-align: left;
                }

                .styled-table tbody tr.active-row {
                    font-weight: bold;
                    color: #009879;
                }

                .styled-table th,
                .styled-table td {
                    padding: 12px 15px;
                }

                .styled-table tbody tr {
                    border-bottom: 1px solid #dddddd;
                }

                .styled-table tbody tr:nth-of-type(even) {
                    background-color: #f3f3f3;
                }

                .styled-table tbody tr:last-of-type {
                    border-bottom: 2px solid #009879;
                }
            </style>
            <table class=" url-list styled-table">
                <thead>
                    <tr>
                        <th>Url</th>
                        <th>Web Archive Url</th>
                        <th>Url Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $wai_type = get_option("wai_type", array());
                    foreach ($url_data as $data_row) {
                        if ($data_row[1] == "text/html") {
                            $wai_url = "https://web.archive.org/web/" . $data_row[3] . "/" . $data_row[0];
                            $type = "";
                            foreach ($wai_type as $row) {
                                if ($row['url'] == $wai_url) {
                                    $type = $row['type'];
                                    break;
                                }
                            }
                            echo "<tr data-url='$wai_url' data-original='" . $data_row[0] . "' data-type='$type'>";
                            echo "<td>";
                            echo $data_row[0];
                            echo "</td>";
                            echo "<td>";
                            echo "<a href='$wai_url' target='_blank'>Link Web Archive</a>";
                            echo "</td>";
                            echo "<td>$type</td>";

                            echo "<td></td>";
                            echo "</tr>";
                        }
                    }
                    ?>
                </tbody>
            </table>
        <?php
            // echo json_encode(get_all_url($import_domain));
        } ?>
    </div>
<?php

}

add_action('wp_ajax_wai_check_type', 'wai_check_type');
add_action('wp_ajax_nopriv_wai_check_type', 'wai_check_type');
function wai_check_type()
{
    if (isset($_POST['url']) && isset($_POST['type'])) {
        $wai_type = get_option("wai_type", array());
        $data = get_url_data($_POST['url']);

        $data_type = get_url_type($data);
        $type_exist = false;
        foreach ($wai_type as $da_row) {
            if ($da_row['url'] == $_POST['url']) {
                $type_exist = true;
            }
        }
        if ($type_exist == false) {
            array_push($wai_type, array("url" => $_POST['url'], "type" => $data_type));
            update_option("wai_type", $wai_type);
        }
        if ($data_type == $_POST['type']) {
            echo json_encode(array("status" => "success", "message" => "Correct Type"));
            wp_die();
        } else {
            echo json_encode(array("status" => "failed", "message" => "The type is not matched ($data_type)"));
            wp_die();
        }
    }
}

add_action('wp_ajax_wai_check_exist', 'wai_check_exist');
add_action('wp_ajax_nopriv_wai_check_exist', 'wai_check_exist');
function wai_check_exist()
{
    $_POST['url'] = str_replace(".htm", "", $_POST['url']);
    if (isset($_POST['url']) && isset($_POST['type'])) {
        $item_slug = "";
        $link_ex = explode("http", $_POST['url']);
        if (count($link_ex) == 3) {
            $item_slug = trim(parse_url("http" .  $link_ex[2], PHP_URL_PATH), "/");
            $item_slug_ex = explode("/", $item_slug);
            $item_slug = $item_slug_ex[count($item_slug_ex) - 1];
        }
        if ($_POST['type'] == "category") {
            $category = get_category_by_slug($item_slug);
            if (isset($category->term_id)) goto problem;
            else goto ok;
        } else if ($_POST['type'] == "post" || $_POST['type'] == "page") {
            $args = array(
                'name'        => $item_slug,
                'post_type'   => array('post', 'page'),
                'post_status' => 'publish',
                'numberposts' => 1
            );
            $my_posts = get_posts($args);
            if ($my_posts) {
                goto problem;
            } else {
                goto ok;
            }
        }
        $wai_imported = get_option("import_url", false);
        if (isset($wai_imported)) {
            if (!empty($wai_imported)) {
                foreach ($wai_imported as $wai_item) {
                    if ($wai_item == $_POST['url']) {
                        goto problem;
                    }
                }
            } else {
                goto ok;
            }
        } else {
            ok:
            echo json_encode(array("status" => "success", "message" => "No exist"));
            wp_die();
        }
        problem:
        echo json_encode(array("status" => "failed", "message" => "Existed"));
        wp_die();
    }
    echo json_encode(array("status" => "failed", "message" => "Unknown error"));
    wp_die();
}
add_action('admin_action_wai10500', 'wai10500_admin_action');
function render_d($input)
{
    $output = str_replace('\"', '"', $input);
    $output = str_replace("\'", "'", $output);
    return $output;
}
function wai10500_admin_action()
{
    if (isset($_POST['import_domain'])) {
        update_option('import_domain', render_d($_POST['import_domain']));
    }
    if (isset($_POST['cat_sel'])) {
        update_option('cat_sel', render_d($_POST['cat_sel']));
    }
    if (isset($_POST['page_sel'])) {
        update_option('page_sel', render_d($_POST['page_sel']));
    }
    if (isset($_POST['post_sel'])) {
        update_option('post_sel', render_d($_POST['post_sel']));
    }

    if (isset($_POST['import_code'])) {
        update_option('import_code', render_d($_POST['import_code']));
    }
    wp_redirect($_SERVER['HTTP_REFERER']);
    exit();
}

function get_latest_data($domain)
{
    $data = wp_remote_retrieve_body(wp_remote_get("https://web.archive.org/__wb/sparkline?output=json&url=" . urlencode("https://$domain") . "&collection=web"));
    $data = json_decode($data);
    return $data;
}
function get_all_url($domain)
{
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://web.archive.org/web/timemap/json?url=" . urlencode("https://$domain") . "&matchType=prefix&collapse=urlkey&output=json&fl=original%2Cmimetype%2Ctimestamp%2Cendtimestamp%2Cgroupcount%2Cuniqcount&filter=!statuscode%3A%5B45%5D..&limit=20000&_=1671063777958",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_PROXY => proxies(),
        CURLOPT_PROXYUSERPWD => "pozzljuy:c7dlc9ephlaq",
        CURLOPT_TIMEOUT => 10,
        CURLOPT_FOLLOWLOCATION => 0,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
    ));

    $data = curl_exec($curl);

    curl_close($curl);

    $data = json_decode($data);
    return $data;
}
// function register_my_plugin_scripts()
// {
//     wp_register_style('my-plugin', plugins_url('/css/plugin.css'));
//     wp_register_script('my-plugin', plugins_url('/js/plugin.js'));
// }


// add_action('admin_enqueue_scripts', 'register_my_plugin_scripts');



// function load_my_plugin_scripts($hook)
// {

//     // Load only on ?page=sample-page
//     if ($hook != 'toplevel_page_sample-page') {
//         return;
//     }

//     wp_enqueue_style('my-plugin');
//     wp_enqueue_script('my-plugin');
// }



// add_action('admin_enqueue_scripts', 'load_my_plugin_scripts');
add_action('wp_ajax_wai_import', 'wai_import');
add_action('wp_ajax_nopriv_wai_import', 'wai_import');
function wai_import()
{

    if (isset($_POST['url'])) {
        $data = get_url_data($_POST['url']);
        $data_type = get_url_type($data);
        $item_slug = "";
        $link_ex = explode("http", $_POST['url']);
        if (count($link_ex) == 3) {
            $item_slug = trim(parse_url("http" .  $link_ex[2], PHP_URL_PATH), "/");
            $item_slug_ex = explode("/", $item_slug);
            if ($item_slug_ex[0] == "category") {
                $item_slug = $item_slug_ex[1];
            } else {
                $item_slug = $item_slug_ex[count($item_slug_ex) - 1];
            }
        }

        if ($data_type == "category") {
            $import_data = get_category_content($data);
            $my_cat = array(
                'cat_name' =>  $import_data['title'],
                'category_description' =>  $import_data['content'],
                'category_nicename' => $item_slug,
                'category_parent' => ''
            );
            $cat_id = wp_insert_category($my_cat);
            if ($cat_id) {
                update_term_meta($cat_id, "rank_math_title", $import_data['meta_title']);
                update_term_meta($cat_id, "rank_math_description", $import_data['meta_description']);
                echo json_encode(array("status" => "success", "message" => "Insert successfully"));
                wp_die();
            }
        } else if ($data_type == "post") {
            $import_data = get_post_content($data);
            $postData = array(
                'post_title' =>  $import_data['title'],
                'post_status' => 'publish',
                'post_content' =>  $import_data['content'],
                'post_author' => 1,
                'post_name' => str_replace(".htm", "", $item_slug),
                'post_type'         =>   'post',
                'post_category' => array()
            );
            $id = wp_insert_post($postData);
            if (isset($id)) {
                update_post_meta($id, "rank_math_title", $import_data['meta_title']);
                update_post_meta($id, "rank_math_description", $import_data['meta_description']);
                if (isset($import_data['category']->term_id)) {
                    wp_set_object_terms($id, intval($import_data['category']->term_id), 'category', false);
                }
                wai_upload_image($import_data['ft_image'], $id, true);
                echo json_encode(array("status" => "success", "message" => "Imported successfully"));
                wp_die();
            }
        } else if ($data_type == "page") {
            $import_data = get_page_content($data);
            $postData = array(
                'post_title' =>  $import_data['title'],
                'post_status' => 'publish',
                'post_content' =>  $import_data['content'],
                'post_author' => 1,
                'post_name' => $item_slug,
                'post_type'         =>   'page',
                'post_category' => array()
            );
            $id = wp_insert_post($postData);
            if (isset($id)) {
                update_post_meta($id, "rank_math_title", $import_data['meta_title']);
                update_post_meta($id, "rank_math_description", $import_data['meta_description']);
                echo json_encode(array("status" => "success", "message" => "Imported successfully"));
                wp_die();
            }
        }
    }
    echo json_encode(array("status" => "failed", "message" => "Unknown error"));
    wp_die();
}

add_action('wp_ajax_get_import_data', 'get_import_data');
add_action('wp_ajax_nopriv_get_import_data', 'get_import_data');
function get_import_data()
{
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    if (isset($_GET['url'])) {
        $data = get_url_data($_GET['url']);
        $data_type = get_url_type($data);
        if ($data_type == "category") get_category_content($data);
        if ($data_type == "post") get_post_content($data);
        echo  $data_type;
    }
    wp_die();
}
function get_url_data($url)
{
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_HTTPHEADER => array(""),
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_PROXY => proxies(),
        CURLOPT_PROXYUSERPWD => "pozzljuy:c7dlc9ephlaq",
        CURLOPT_TIMEOUT => 10,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
    ));

    $data = curl_exec($curl);
    $httpcode = curl_getinfo($curl, CURLINFO_RESPONSE_CODE);

    curl_close($curl);

    if ($httpcode == 200)  return  $data;
    return false;
}
function get_url_type($data)
{
    $doc_main = new DOMDocument();
    $content = html_entity_decode($data);
    if (!empty($content)) {


        @$doc_main->loadHTML(mb_convert_encoding($content, 'HTML-ENTITIES', 'UTF-8'));
        $xpath_main = new DOMXPath($doc_main);
        if (count($xpath_main->query('//body[contains(@class,"page-id-")]')) > 0) {
            return "page";
        } else if (count($xpath_main->query(get_option('post_sel'))) > 0) {
            return "post";
        } else if (count($xpath_main->query('//body[contains(@class,"postid-")]')) > 0) {
            return "post";
        } else if (count($xpath_main->query('//body[contains(@class,"category-")]')) > 0) {
            return "category";
        }
    }
    return "unknown";
}

function get_category_content($data)
{
    $doc_main = new DOMDocument();
    $content = html_entity_decode($data);
    @$doc_main->loadHTML(mb_convert_encoding($content, 'HTML-ENTITIES', 'UTF-8'));
    $xpath_main = new DOMXPath($doc_main);
    $h1_xpath = $xpath_main->query("//h1");
    $h1 = "";
    $content = "";
    $meta_title = "";
    $meta_description = "";
    if (count($h1_xpath) > 0) {
        $h1 =  ($h1_xpath->item(0))->nodeValue;
        if (strrpos($h1, ":") !== false) {
            $h1_ex = explode(":", $h1);
            $h1 = $h1_ex[1];
        }
    }
    $description_xpath = $xpath_main->query("//div[contains(@class,'taxonomy-description')]");
    if (count($description_xpath) > 0) {
        // $sad = $description_xpath->item(0);
        $content_xpath = $description_xpath->item(0);
        wai_replace_link($xpath_main,  $content_xpath);
        wai_replace_img($doc_main, $xpath_main,  $content_xpath);
        $content =  $doc_main->saveHTML($content_xpath);
    }
    $meta_title_xpath = $xpath_main->query("//title");
    if (count($meta_title_xpath) > 0) {
        $meta_title = ($meta_title_xpath->item(0))->nodeValue;
    }
    $meta_description_xpath = $xpath_main->query("//meta[@name='description']/@content");
    if (count($meta_description_xpath) > 0) {
        $meta_description = ($meta_description_xpath->item(0))->nodeValue;
    }
    $data_array = array(
        "title" => wai_trim($h1),
        "content" => $content,
        "meta_title" => $meta_title,
        "meta_description" => $meta_description,
    );
    return  $data_array;
}


function get_post_content($data)
{
    $doc_main = new DOMDocument();
    $content = html_entity_decode($data);
    @$doc_main->loadHTML(mb_convert_encoding($content, 'HTML-ENTITIES', 'UTF-8'));
    $xpath_main = new DOMXPath($doc_main);

    $h1_xpath = $xpath_main->query("//h1");
    $h1 = "";
    $content = "";
    $meta_title = "";
    $ft_image = "";
    $meta_description = "";
    if (count($h1_xpath) > 0) {
        $h1 =  ($h1_xpath->item(0))->nodeValue;
        if (strrpos($h1, ":") !== false) {
            $h1_ex = explode(":", $h1);
            $h1 = $h1_ex[1];
        }
    }
    // $category_xpath = $xpath_main->query("//*[contains(@class,'cat-links')]/a");
    $category_xpath = $xpath_main->query("//a[@rel='category']");
    if (count($category_xpath) > 0) {

        $category_xpath = ($category_xpath->item(0));
        $cate_link = ($xpath_main->query("./@href",  $category_xpath)->item(0)->nodeValue);
        $link_ex = explode("http", $cate_link);
        if (count($link_ex) == 3) {
            $cate_link = "http" .  $link_ex[2];
        } else if (count($link_ex) == 2) {
            $cate_link = "http" .  $link_ex[1];
        }

        $cate_text = $category_xpath->nodeValue;

        $item_slug = trim(parse_url($cate_link, PHP_URL_PATH), "/");
        if (strpos($item_slug, "/") !== false) {
            $link_exploded = explode("/", $item_slug);
            $item_slug = $link_exploded[count($link_exploded) - 1];
        }

        $category = get_category_by_slug($item_slug);
    } else {
        $category_xpath = $xpath_main->query("//a[@rel='category']");

        if (count($category_xpath) == 0) {
            $category_xpath = $xpath_main->query("//*[contains(@class,'entry-categories')]/a");
        }
        if (count($category_xpath) == 0) {
            $category_xpath = $xpath_main->query("//*[contains(@class,'entry-category')]/a");
        }
        if (count($category_xpath) > 0) {
            $category_xpath = ($category_xpath->item(0));
            $cate_link = ($xpath_main->query("./@href",  $category_xpath)->item(0)->nodeValue);
            $link_ex = explode("http", $cate_link);
            if (count($link_ex) == 3) {
                $cate_link = "http" .  $link_ex[2];
            } else if (count($link_ex) == 2) {
                $cate_link = "http" .  $link_ex[1];
            }
            $cate_text = $category_xpath->nodeValue;
            $item_slug = trim(parse_url($cate_link, PHP_URL_PATH), "/");
            $category = get_category_by_slug($item_slug);
        }
    }
    $selector = "";
    $selector = get_option('post_sel');
    $biggest = array();
    if ($selector == "auto") {
        $content_node = $xpath_main->query("//*");
        foreach ($content_node as $node) {
            $p = $xpath_main->query("./p", $node);
            if (!isset($biggest['count']) || count($p) >  $biggest['count']) {
                $biggest['count'] = count($p);
                $biggest['node'] = $node;
            }
        }
        if (isset($biggest['node']))
            $content_xpath = $biggest['node'];
    } else {
        $entry_content_xpath = $xpath_main->query((isset($selector) && !empty($selector)) ? $selector : "//div[contains(@class,'entry-content')]");
        if (count($entry_content_xpath) == 0) {
            $entry_content_xpath = $xpath_main->query("//div[contains(@class,'entry-content')]");
        }
        if (count($entry_content_xpath) > 0) {
            $content_xpath = $entry_content_xpath->item(0);
        }
    }
    if (count($content_xpath) > 0) {
        $toc_dom =  $xpath_main->query("./*[@id='ez-toc-container']", $content_xpath);
        if (count($toc_dom) > 0) {
            $toc = $toc_dom->item(0);
            $content_xpath->removeChild($toc);
        }

        $k_star =  $xpath_main->query("./*[contains(@class,'kk-star-ratings')]", $content_xpath);
        if (count($k_star) > 0) {
            $k_star_s = $k_star->item(0);
            $content_xpath->removeChild($k_star_s);
        }

        wai_replace_link($xpath_main,  $content_xpath);
        wai_replace_img($doc_main, $xpath_main,  $content_xpath);
        $content = "";
        $doc_main->saveHTML($content_xpath);
        foreach ($content_xpath->childNodes as $childNode) {
            $content .=  $doc_main->saveHTML($childNode);
        }
    }
    $meta_title_xpath = $xpath_main->query("//title");
    if (count($meta_title_xpath) > 0) {
        $meta_title = ($meta_title_xpath->item(0))->nodeValue;
    }

    $meta_description_xpath = $xpath_main->query("//meta[@name='description']/@content");
    if (count($meta_description_xpath) > 0) {
        $meta_description = ($meta_description_xpath->item(0))->nodeValue;
    }
    $meta_description_xpath = $xpath_main->query("//meta[@name='description']/@content");
    if (count($meta_description_xpath) > 0) {
        $meta_description = ($meta_description_xpath->item(0))->nodeValue;
    }

    //feature image 
    $ft_image_xpath = $xpath_main->query("//meta[@property='og:image']/@content");
    if (count($ft_image_xpath) > 0) {
        $ft_image = ($ft_image_xpath->item(0))->nodeValue;
    } else {
        $ft_image_xpath = $xpath_main->query("//meta[@property='twitter:image']/@content");
        if (count($ft_image_xpath) > 0) {
            $ft_image = ($ft_image_xpath->item(0))->nodeValue;
        }
    }

    $data_array = array(
        "title" => wai_trim($h1),
        "content" => $content,
        "meta_title" => $meta_title,
        "meta_description" => $meta_description,
        "ft_image" => $ft_image,
        "category" => $category
    );
    return  $data_array;
}
function get_page_content($data)
{
    $doc_main = new DOMDocument();
    $content = html_entity_decode($data);
    @$doc_main->loadHTML(mb_convert_encoding($content, 'HTML-ENTITIES', 'UTF-8'));
    $xpath_main = new DOMXPath($doc_main);

    $h1_xpath = $xpath_main->query("//h1");
    $h1 = "";
    $content = "";
    $meta_title = "";
    $meta_description = "";
    if (count($h1_xpath) > 0) {
        $h1 =  ($h1_xpath->item(0))->nodeValue;
        if (strrpos($h1, ":") !== false) {
            $h1_ex = explode(":", $h1);
            $h1 = $h1_ex[1];
        }
    }
    $selector = "";
    $selector = get_option('page_sel');
    if ($selector == "auto") {
        $content_node = $xpath_main->query("//*");
        $biggest = array();
        foreach ($content_node as $node) {
            $p = $xpath_main->query("./p", $node);
            if (!isset($biggest['count']) || count($p) >  $biggest['count']) {
                $biggest['count'] = count($p);
                $biggest['node'] = $node;
            }
        }
        if (isset($biggest['node']))
            $content_xpath = $biggest['node'];
    } else {
        $entry_content_xpath = $xpath_main->query((isset($selector) && !empty($selector)) ? $selector : "//div[contains(@class,'content-area')]");
        if (count($entry_content_xpath) == 0) {
            $entry_content_xpath = $xpath_main->query("//div[contains(@class,'content-area')]");
        }

        if (count($entry_content_xpath) == 0) {
            $entry_content_xpath = $xpath_main->query("//div[contains(@class,'type-page')]");
        }
        if (count($entry_content_xpath) > 0) {
            $content_xpath = $entry_content_xpath->item(0);
        }
    }
    if (count($content_xpath) > 0) {
        $toc_dom =  $xpath_main->query("./*[@id='ez-toc-container']", $content_xpath);
        if (count($toc_dom) > 0) {
            $toc = $toc_dom->item(0);
            $content_xpath->removeChild($toc);
        }

        $k_star =  $xpath_main->query("./*[contains(@class,'kk-star-ratings')]", $content_xpath);
        if (count($k_star) > 0) {
            $k_star_s = $k_star->item(0);
            $content_xpath->removeChild($k_star_s);
        }

        wai_replace_link($xpath_main,  $content_xpath);
        wai_replace_img($doc_main, $xpath_main,  $content_xpath);
        $content = "";
        $doc_main->saveHTML($content_xpath);
        foreach ($content_xpath->childNodes as $childNode) {
            $content .=  $doc_main->saveHTML($childNode);
        }
    }

    $meta_title_xpath = $xpath_main->query("//title");
    if (count($meta_title_xpath) > 0) {
        $meta_title = ($meta_title_xpath->item(0))->nodeValue;
        if (empty($h1)) {
            $h1 =    $meta_title;
        }
    }
    $meta_description_xpath = $xpath_main->query("//meta[@name='description']/@content");
    if (count($meta_description_xpath) > 0) {
        $meta_description = ($meta_description_xpath->item(0))->nodeValue;
    }
    $meta_description_xpath = $xpath_main->query("//meta[@name='description']/@content");
    if (count($meta_description_xpath) > 0) {
        $meta_description = ($meta_description_xpath->item(0))->nodeValue;
    }

    $data_array = array(
        "title" => wai_trim($h1),
        "content" => $content,
        "meta_title" => $meta_title,
        "meta_description" => $meta_description,
    );
    return  $data_array;
}
function wai_trim($s)
{
    $ws = " \t\n\r\0\x0B\u200b";
    $s = trim($s, $ws);
    return $s;
}
function wai_replace_link($xpath_main, $domnode)
{
    // $site_url = get_site_url();
    $import_domain = get_option('import_domain');
    // $parse = parse_url("https://".$import_domain);
    $hyperlinks = $xpath_main->query("//a", $domnode);
    foreach ($hyperlinks as  $hyperlink) {
        $link = $xpath_main->query("./@href", $hyperlink);
        if (count($link) > 0) {
            $link = ($link->item(0))->nodeValue;
            if (strpos($link, $import_domain) !== false) {
                $link_ex = explode("http", $link);
                if (count($link_ex) == 3) {
                    $hyperlink->setAttribute('href', "http" .  $link_ex[2]);
                } else if (count($link_ex) == 2) {
                    $hyperlink->setAttribute('href', "http" .  $link_ex[1]);
                } else {
                    $hyperlink->setAttribute('href', "#");
                }
            } else {
                $hyperlink->setAttribute('href', "#");
            }
        } else {
            $hyperlink->setAttribute('href', "#");
        }
    }
}

function wai_replace_img($dom, $xpath_main, $domnode)
{
    $images_list = $xpath_main->query(".//img", $domnode);
    if (count($images_list) > 0) {
        foreach ($images_list as  $image_dom) {
            $link = $xpath_main->query("./@src", $image_dom);
            if (count($link) > 0) {
                $img = $dom->createElement('img');
                $link = ($link->item(0))->nodeValue;
                $link_new = wai_upload_image($link, '',  false,  true);
                if ($link_new != false) {

                    $img->setAttribute('src', $link_new);
                    $alt = "";
                    $alt_xpath = $xpath_main->query("./@alt", $image_dom);
                    if (count($alt_xpath) > 0) {
                        $alt = ($alt_xpath->item(0))->nodeValue;
                        $img->setAttribute('alt', $alt);
                    }
                    $image_dom->parentNode->replaceChild($img, $image_dom);
                } else {
                    $image_dom->parentNode->removeChild($image_dom);
                }
            }
        }
    }
}

function wai_upload_image($url = '', $post = '', $thumbnail = false, $showurl = false)
{
    require_once(ABSPATH . 'wp-admin/includes/file.php');
    require_once(ABSPATH . 'wp-admin/includes/image.php');
    global $wp_filesystem;
    WP_Filesystem();
    $upload_dir      = wp_upload_dir();
    $image_data      = get_url_data($url);
    $filename      = wp_basename($url);
    if (!is_wp_error($image_data) && !empty($image_data)) {
        // Path folder
        if (wp_mkdir_p($upload_dir['path'])) {
            $file = $upload_dir['path'] . '/' . $filename;
        } else {
            $file = $upload_dir['basedir'] . '/' . $filename;
        }
        $wp_filesystem->put_contents($file, $image_data);
        $wp_filetype = wp_check_filetype($filename, null);

        // Compose attachment Post
        $attachment = array(
            'post_mime_type' => $wp_filetype['type'],
            'post_title' => sanitize_file_name($filename),
            'post_content' => false,
            'post_status' => 'inherit'
        );
        // Insert Attachment
        $attach_id     = wp_insert_attachment($attachment, $file, $post);
        $attach_data = wp_generate_attachment_metadata($attach_id, $file);
        wp_update_attachment_metadata($attach_id, $attach_data);
        // Featured Image
        if ($thumbnail == true) set_post_thumbnail($post, $attach_id);
        if ($showurl == true) return wp_get_attachment_url($attach_id);
    }
    return false;
}
