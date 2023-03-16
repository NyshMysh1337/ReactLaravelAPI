<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Material\StoreRequest;
use App\Http\Requests\Material\UpdateRequest;
use App\Models\Material;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MaterialController extends BaseController
{
    public function add(StoreRequest $request) {
        $this->serviceMaterial->add($request);
    }

    public function destroy($id) {
        $this->serviceMaterial->destroy($id);
    }

    public function update(UpdateRequest $request, $id) {
        $this->serviceMaterial->update($id, $request);
    }
}
