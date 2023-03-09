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
        return $courses;
    }

    public function update($request, $id) {
        $data = $request->validated();
        $courses = Courses::findOrFail($id)->update($data);
        return $courses;
    }
}
