<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
{
    Schema::create('homeworks', function (Blueprint $table) {  // 'homeworks' ব্যবহার করুন
        $table->id();
        $table->string('version');
        $table->string('class');
        $table->string('batch');
        $table->date('date');

        for ($i = 1; $i <= 6; $i++) {
            $table->string("period_{$i}_subject");
            $table->string("period_{$i}_homework")->nullable();
        }

        $table->timestamps();
    });
}

    

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('homeworks');
    }
};
