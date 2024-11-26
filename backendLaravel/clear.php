<?php
use Illuminate\Support\Facades\Artisan;

// Laravel এর autoload.php ফাইল লোড করা
require __DIR__.'/vendor/autoload.php';

// Laravel এর application bootstrap করা
$app = require_once __DIR__.'/bootstrap/app.php';

// Artisan কমান্ড কল করা
Artisan::call('config:clear');
Artisan::call('cache:clear');
Artisan::call('route:clear');
Artisan::call('view:clear');

echo "All cache cleared successfully!";
?>
