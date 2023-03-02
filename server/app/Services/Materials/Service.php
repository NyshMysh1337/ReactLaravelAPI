<?php

namespace App\Services\Materials;

use App\Models\Material;
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
}
