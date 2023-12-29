<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category'=>$this->faker->word(),
            'name'=>$this->faker->word(),
            'alt'=>$this->faker->word(),
            'description'=>$this->faker->realText($maxNbChars = 50),
            'image_path'=>$this->faker->imageUrl(640,480),
        ];
    }
}
