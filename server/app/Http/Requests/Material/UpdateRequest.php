<?php

namespace App\Http\Requests\Material;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'materials' => 'required|array'
        ];
    }

    public function messages()
    {
        return [
            'materials.required' => 'Это поле обязательно!',
            'name.required' => 'Это поле обязательно!'
        ];
    }
}
