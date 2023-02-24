<?php

namespace App\Http\Requests\Courses;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
            'title' => 'required|string|min:10',
            'description' => 'required|string|min:20',
            'duration_h' => 'required|integer',
            'hyper_link' => 'required|url',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Это поле необходимо для заполнения',
            'title.string' => 'Данные должны соответствовать строчному типу',
            'title.min' => 'Заголовок должен содержать минимум 10 символов',
            'description.string' => 'Данные должны соответствовать строчному типу',
            'description.required' => 'Это поле необходимо для заполнения',
            'description.min' => 'Заголовок должен содержать минимум 20 символов',
            'duration_h.required' => 'Это поле необходимо для заполнения',
            'duration_h.integer' => 'Данные должны соответствовать числовому типу',
            'hyper_link.required' => 'Это поле необходимо для заполнения',
            'hyper_link.url' => 'Должно быть ссылкой!',
        ];
    }
}
