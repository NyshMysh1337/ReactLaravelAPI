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
    }

    public function destroy($id) {
        $this->serviceMaterial->destroy($id);
    }

    public function update(Request $request, $id) {
        $data = $request->validate([
            'name' => 'required'
        ]);
        $course = Material::findOrFail($id);
//        return $course;
        $course->update($data);
//        $this->serviceMaterial->update($id, $request);
    }
}
