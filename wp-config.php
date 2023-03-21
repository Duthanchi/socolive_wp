<?php
define( 'WP_CACHE', false /* Modified by NitroPack */ );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', "newwpsite" );

/** Database username */
define( 'DB_USER', "root" );

/** Database password */
define( 'DB_PASSWORD', "" );

/** Database hostname */
define( 'DB_HOST', "localhost" );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '>z$2F?o=&PuF(#DC?b41E6eL+UA;?HX,LA6B~8jW(_w}LMVt|g!.4zLtkZ6uz*.t' );
define( 'SECURE_AUTH_KEY',  ',R*)pXjlP*&+jp=qnG0+moFG,~[=j#mGF8n&Ii AWvYAWa~g${P;lDR>SFs0^GaW' );
define( 'LOGGED_IN_KEY',    'G3l_FJ/-*,G=65`p=Tp[v([X%_rj/AWt7:/{5;hND|*+Ph&`N+su67(;t4YKe;>1' );
define( 'NONCE_KEY',        'gq{E^F.DhRS2T^+i_Zed3 )v~W$NnX^-JI2LVKvZbA?$uAAly.M-WiTx*cV0!lH_' );
define( 'AUTH_SALT',        'H*.x%Ts<A|`NN%JUsPLyI3MJUv.fqACKN,7%Yi7e2G5]Yu:0IsW(QhWe~}4;%oFo' );
define( 'SECURE_AUTH_SALT', '>]`smE},jG:RJ.^IywkXd:`o;]?x5e^k{t8lFEWjbPDGCP(hd^h[Hk/p>0PWPw{?' );
define( 'LOGGED_IN_SALT',   'Pj!/$:Vn!~5J>zJRH6|sI8TC~pNnD:SfQ6]G qW[ q]FDD6C(8#3RK[/vJ.$?L><' );
define( 'NONCE_SALT',       'h.VhV|)PyLe sU=h>dxxsd$N.Z)ib5]qot2jFxVJ*l*lKFJ #snDc%:a)[swI56e' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



define( 'DUPLICATOR_AUTH_KEY', '3)~R(g~5IzI3h}LMW+0.?QOx4j)33l!v|uM~:Ny2}IK<;k h3;bK{OAwKz(MhY5v' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname(__FILE__) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
