<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Material;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MaterialController extends BaseController
{
    public function add(Request $request) {

        $this->serviceMaterial->add($request);

//        $file = $request->file('material');
//        $path = Storage::disk('public')->put('materials', $file);
//        time() . "_" . uniqid() . "_" . $file->getClientOriginalName();
//
//        Material::create([
//            'courses_id' => $request->courses_id,
//            'material' => $path,
//            'name' => $request->name
//        ]);
    }
}
