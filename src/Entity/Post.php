<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PostRepository;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\Valid;

/**
 * @ORM\Entity(repositoryClass=PostRepository::class)
 */
#[ApiResource(
//    collectionOperations: [
//        'get'=> [
//            'normalization_context' => ['groups' => ['read:Post:collection', 'read:Post:item', 'read:Post']]
//        ],
//        'post'
//    ],
//    itemOperations: [
//        'put',
//        'delete',
//        'get' => [
//            'normalization_context' => ['groups' => ['read:Post:collection', 'read:Post:item', 'read:Post']]
//        ]
//    ],
    denormalizationContext: ['groups' => ['post:write']],
    normalizationContext: ['groups' => ['post:read']],
    paginationItemsPerPage: 2,
    paginationMaximumItemsPerPage:2,
    paginationClientItemsPerPage: true
)]
class Post
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    #[Groups(['post:read'])]
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    #[Groups(['post:read','post:write']),
        Length(min: 5)
    ]
    private ?string $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    #[Groups(['post:read','post:write'])]
    private ?string $slug;

    /**
     * @ORM\Column(type="text")
     */
    #[Groups(['post:read','post:write'])]
    private ?string $content;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    #[Groups(['post:read'])]
    private ?DateTimeImmutable $createdAt;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    #[Groups(['post:read'])]
    private ?DateTimeImmutable $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="posts",cascade={"persist"})
     */
    #[Groups(['post:read','post:write']),
        Valid()
    ]
    private $category;

    /**
     */
    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->updatedAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getCreatedAt(): ?DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }
}
