<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Homeworks;
use Illuminate\Http\Request;

class HomeworkController extends Controller
{
    public function index()
    {
        return response()->json(Homeworks::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'version' => 'required|string',
            'class' => 'required|string',
            'batch' => 'required|string',
            'date' => 'required|date',
            'period_1_subject' => 'required|string',
            'period_1_homework' => 'nullable|string',
            'period_2_subject' => 'required|string',
            'period_2_homework' => 'nullable|string',
            'period_3_subject' => 'required|string',
            'period_3_homework' => 'nullable|string',
            'period_4_subject' => 'required|string',
            'period_4_homework' => 'nullable|string',
            'period_5_subject' => 'required|string',
            'period_5_homework' => 'nullable|string',
            'period_6_subject' => 'required|string',
            'period_6_homework' => 'nullable|string',
        ]);

        $homework = Homeworks::create($validated);
        return response()->json($homework, 201);
    }

    public function show(Homeworks $homework)
    {
        return response()->json($homework);
    }

    public function update(Request $request, Homeworks $homework)
    {
        $validated = $request->validate([
            'version' => 'sometimes|required|string',
            'class' => 'sometimes|required|string',
            'batch' => 'sometimes|required|string',
            'date' => 'sometimes|required|date',
            'period_1_subject' => 'sometimes|required|string',
            'period_1_homework' => 'nullable|string',
            'period_2_subject' => 'sometimes|required|string',
            'period_2_homework' => 'nullable|string',
            'period_3_subject' => 'sometimes|required|string',
            'period_3_homework' => 'nullable|string',
            'period_4_subject' => 'sometimes|required|string',
            'period_4_homework' => 'nullable|string',
            'period_5_subject' => 'sometimes|required|string',
            'period_5_homework' => 'nullable|string',
            'period_6_subject' => 'sometimes|required|string',
            'period_6_homework' => 'nullable|string',
        ]);

        $homework->update($validated);
        return response()->json($homework);
    }

    public function destroy(Homeworks $homework)
    {
        $homework->delete();
        return response()->json(null, 204);
    }
}

