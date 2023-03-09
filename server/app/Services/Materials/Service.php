<?php

namespace App\Services\Materials;

use App\Models\Material;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class Service
{
    public function add($request) {
        $file = $request->file('material');
        $path = Storage::disk('public')->put('materials', $file);
        time() . "_" . uniqid() . "_" . $file->getClientOriginalName();

        Material::create([
            'courses_id' => $request->courses_id,
            'material' => $path,
            'name' => $request->name
        ]);
    }

    public function destroy($id) {
        $material = Material::findOrFail($id);

        Storage::disk('public')->delete($material->material);

        $material->delete();


        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function update($id, $request) {
        $data = $request->validate([
            'name' => 'required'
        ]);
        $course = Material::findOrFail($id);
        $course->update($data);
    }
}
