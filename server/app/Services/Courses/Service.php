<?php

namespace App\Services\Courses;

use App\Http\Resources\CoursesResource;
use App\Models\Courses;
use App\Models\Material;
use Illuminate\Support\Facades\Storage;

class Service
{
    public function index() {
        return CoursesResource::collection(Courses::with('materials')->get());
    }
    public function store($request) {
        $courses = Courses::create($request->validated());

        if ($request->hasfile('materials')) {
            foreach ($request->file('materials') as $file) {
                $path = Storage::disk('public')->put('materials', $file);
                time() . "_" . uniqid() . "_" . $file->getClientOriginalName();

                Material::create([
                    'courses_id' => $courses->id,
                    'material' => $path
                ]);
            }
        }

        return new CoursesResource($courses);
    }

    public function update() {

    }
}
