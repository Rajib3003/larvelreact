<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Homeworks extends Model
{
    use HasFactory;

    protected $table = 'homeworks';  // নিশ্চিত করুন যে টেবিল নাম সঠিক
    protected $fillable = [
        'version', 'class', 'batch', 'date',
        'period_1_subject', 'period_1_homework',
        'period_2_subject', 'period_2_homework',
        'period_3_subject', 'period_3_homework',
        'period_4_subject', 'period_4_homework',
        'period_5_subject', 'period_5_homework',
        'period_6_subject', 'period_6_homework',
    ];
}
